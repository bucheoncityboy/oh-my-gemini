const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Corporate Engine - Unified Hard Harness
 * Integrates LSP diagnostics and Functional validation into a single hard gate.
 */

const [,, targetFile, execCmd, expectPatterns] = process.argv;

if (!targetFile || !execCmd) {
    console.error('[HARNESS] Usage: node harness.js <file> <"cmd"> <"p1,p2">');
    process.exit(1);
}

console.log(`\n[HARNESS] 🛡️  Starting Corporate Audit Gate...`);

try {
    // 1. LSP / Syntax Check
    console.log(`[HARNESS] 🔍 Phase 1: LSP/Syntax Check...`);
    const ext = path.extname(targetFile);
    if (ext === '.py') {
        execSync(`python -m py_compile ${targetFile}`, { stdio: 'inherit' });
    } else if (ext === '.js' || ext === '.ts') {
        execSync(`node --check ${targetFile}`, { stdio: 'inherit' });
    }
    console.log(`[HARNESS] ✅ LSP Check Passed.`);

    // 2. Functional & Log Pattern Check
    console.log(`[HARNESS] 🚀 Phase 2: Functional Validation...`);
    const patterns = expectPatterns ? expectPatterns.split(',') : [];
    let output = '';
    
    try {
        output = execSync(execCmd, { encoding: 'utf8' });
        process.stdout.write(output);
    } catch (err) {
        output = err.stdout + err.stderr;
        process.stdout.write(output);
        throw new Error('Functional execution failed (Non-zero exit code).');
    }

    const missing = patterns.filter(p => !output.includes(p));
    if (missing.length > 0) {
        throw new Error(`Missing expected patterns: ${missing.join(', ')}`);
    }

    console.log(`\n[HARNESS] ✅ Functional Check Passed.`);
    console.log(`[HARNESS] 🏆 GATE OPEN: Code is compliant with Corporate Standards.`);
    process.exit(0);

} catch (error) {
    console.error(`\n[HARNESS] ❌ GATE CLOSED: Audit Failed.`);
    console.error(`[HARNESS] Reason: ${error.message}`);
    process.exit(1);
}
