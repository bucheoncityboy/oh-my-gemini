import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * OMG Corporate Engine - Unified Hard Harness (TypeScript Version)
 */

interface HarnessConfig {
    targetFile: string;
    execCmd: string;
    expectPatterns: string[];
}

interface AuditReport {
    success: boolean;
    reason?: string;
    timestamp: string;
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('[HARNESS-TS] Usage: tsx src/harness.ts <file> <"cmd"> <"p1,p2">');
    process.exit(1);
}

const config: HarnessConfig = {
    targetFile: args[0],
    execCmd: args[1],
    expectPatterns: args[2] ? args[2].split(',') : []
};

console.log(`\n[HARNESS-TS] 🛡️  Starting Corporate Audit Gate (v2.0-TS)...`);

function runAudit(cfg: HarnessConfig): AuditReport {
    try {
        // 1. LSP / Syntax Check
        console.log(`[HARNESS-TS] 🔍 Phase 1: LSP/Syntax Check...`);
        const ext = path.extname(cfg.targetFile);
        if (ext === '.py') {
            execSync(`python -m py_compile ${cfg.targetFile}`, { stdio: 'inherit' });
        } else if (ext === '.js' || ext === '.ts') {
            // For TS files, we would normally use tsc, but node --check works for syntax
            execSync(`node --check ${cfg.targetFile}`, { stdio: 'inherit' });
        }
        console.log(`[HARNESS-TS] ✅ LSP Check Passed.`);

        // 2. Functional & Log Pattern Check
        console.log(`[HARNESS-TS] 🚀 Phase 2: Functional Validation...`);
        let output = '';
        try {
            output = execSync(cfg.execCmd, { encoding: 'utf8', stdio: 'pipe' });
            process.stdout.write(output);
        } catch (err: any) {
            output = err.stdout + err.stderr;
            process.stdout.write(output);
            throw new Error(`Functional execution failed: ${err.message}`);
        }

        const missing = cfg.expectPatterns.filter(p => !output.includes(p));
        if (missing.length > 0) {
            throw new Error(`Missing expected patterns: ${missing.join(', ')}`);
        }

        return { success: true, timestamp: new Date().toISOString() };

    } catch (error: any) {
        return { success: false, reason: error.message, timestamp: new Date().toISOString() };
    }
}

const report = runAudit(config);

if (report.success) {
    console.log(`\n[HARNESS-TS] ✅ Functional Check Passed.`);
    console.log(`[HARNESS-TS] 🏆 GATE OPEN: Code is compliant with Corporate Standards.`);
    process.exit(0);
} else {
    console.error(`\n[HARNESS-TS] ❌ GATE CLOSED: Audit Failed.`);
    console.error(`[HARNESS-TS] Reason: ${report.reason}`);
    process.exit(1);
}
