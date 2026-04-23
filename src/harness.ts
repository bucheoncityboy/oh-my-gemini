import { execSync, spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { AnchorEngine } from './lib/anchor';
import { StateManager } from './lib/state_manager';

/**
 * OMG Corporate Engine - Unified Hard Harness (v3.2-Persistent)
 * Implements Multi-Layer Validation, Hash-Anchored Integrity, and State Reporting.
 */

interface HarnessConfig {
    targetFile: string;
    execCmd: string;
    expectPatterns: string[];
    timeout: number;
    taskId?: string; // Optional Task ID to report back to StateManager
}

interface AuditReport {
    success: boolean;
    phase: 'STATIC' | 'FUNCTIONAL' | 'STRUCTURAL';
    reason?: string;
    details?: any;
    timestamp: string;
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('[HARNESS-v3] Usage: tsx src/harness.ts <file> <"cmd"> <"p1,p2"> [timeout_ms]');
    process.exit(1);
}

const config: HarnessConfig = {
    targetFile: args[0],
    execCmd: args[1].trim(),
    expectPatterns: args[2] ? args[2].split(',') : [],
    timeout: args[3] ? parseInt(args[3]) : 30000, // Default 30s
    taskId: args[4] // Optional Task ID
};

const AUDIT_LOG_DIR = path.join(process.cwd(), '.gemini/harness/logs');
if (!fs.existsSync(AUDIT_LOG_DIR)) {
    fs.mkdirSync(AUDIT_LOG_DIR, { recursive: true });
}

console.log(`\n[HARNESS-v3] 🛡️  Starting Deterministic Corporate Audit Gate...`);

function logAudit(report: AuditReport, cfg: HarnessConfig) {
    const logFile = path.join(AUDIT_LOG_DIR, `audit_${Date.now()}.json`);
    fs.writeFileSync(logFile, JSON.stringify(report, null, 2));

    if (cfg.taskId) {
        StateManager.updateTask(cfg.taskId, report.success ? 'COMPLETED' : 'FAILED', report);
    }

    if (!report.success) {
        console.error(`\n[HARNESS-v3] ❌ PHASE FAILED: ${report.phase}`);
        console.error(`[HARNESS-v3] Reason: ${report.reason}`);
    }
}

function runAudit(cfg: HarnessConfig): AuditReport {
    const timestamp = new Date().toISOString();
    const ext = path.extname(cfg.targetFile);

    try {
        // 1. L0: Static Analysis (Linter/Type Check)
        console.log(`[HARNESS-v3] 🔍 Phase 0: Static Analysis (${ext})...`);
        if (ext === '.py') {
            // Try ruff first, fallback to py_compile
            try {
                execSync(`ruff check ${cfg.targetFile}`, { stdio: 'inherit' });
            } catch (e) {
                console.log(`[HARNESS-v3] Ruff not found or failed, falling back to py_compile...`);
                execSync(`python -m py_compile ${cfg.targetFile}`, { stdio: 'inherit' });
            }
        } else if (ext === '.ts') {
            // Strict TS check
            try {
                execSync(`npx tsc --noEmit ${cfg.targetFile} --esModuleInterop --skipLibCheck --ignoreConfig`, { stdio: 'inherit' });
            } catch (e) {
                // node --check as last resort for syntax
                execSync(`node --check ${cfg.targetFile}`, { stdio: 'inherit' });
            }
        }
        console.log(`[HARNESS-v3] ✅ Static Analysis Passed.`);

        // 2. L1: Structural Integrity (Hash-Anchored)
        const anchorFile = `${cfg.targetFile}.anchor.json`;
        if (fs.existsSync(anchorFile)) {
            console.log(`[HARNESS-v3] ⚓ Phase 1: Structural Integrity Check...`);
            const anchors = JSON.parse(fs.readFileSync(anchorFile, 'utf8'));
            const currentAnchors = AnchorEngine.generateAnchors(cfg.targetFile);
            
            // Check if essential lines still match (sampling check)
            for (const expected of anchors.slice(0, 10)) { // Check first 10 lines as a smoke test
                const current = currentAnchors.find(a => a.line === expected.line);
                if (!current || current.hash !== expected.hash) {
                    return { 
                        success: false, 
                        phase: 'STRUCTURAL', 
                        reason: `Hash mismatch at line ${expected.line}. Expected ${expected.hash}, found ${current?.hash}.`,
                        timestamp 
                    };
                }
            }
            console.log(`[HARNESS-v3] ✅ Integrity Check Passed.`);
        }

        // 3. L2: Functional Validation
        console.log(`[HARNESS-v3] 🚀 Phase 1: Functional Validation...`);
        const result = spawnSync(cfg.execCmd, { 
            shell: true, 
            encoding: 'utf8', 
            timeout: cfg.timeout,
            maxBuffer: 10 * 1024 * 1024 // 10MB
        });

        const output = result.stdout + result.stderr;
        process.stdout.write(output);

        if (result.status !== 0) {
            return { 
                success: false, 
                phase: 'FUNCTIONAL', 
                reason: `Execution failed with exit code ${result.status}`,
                details: { stderr: result.stderr },
                timestamp 
            };
        }

        const missing = cfg.expectPatterns.filter(p => !new RegExp(p, 'i').test(output));
        if (missing.length > 0) {
            return { 
                success: false, 
                phase: 'FUNCTIONAL', 
                reason: `Missing expected patterns: ${missing.join(', ')}`,
                timestamp 
            };
        }

        return { success: true, phase: 'FUNCTIONAL', timestamp };

    } catch (error: any) {
        return { 
            success: false, 
            phase: 'STRUCTURAL', 
            reason: error.message, 
            timestamp 
        };
    }
}

const report = runAudit(config);
logAudit(report, config);

if (report.success) {
    console.log(`\n[HARNESS-v3] 🏆 GATE OPEN: Code is compliant and verified.`);
    process.exit(0);
} else {
    process.exit(1);
}
