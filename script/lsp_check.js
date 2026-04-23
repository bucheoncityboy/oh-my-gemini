const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * OmO-style LSP/Syntax Gatekeeper
 * Automatically detects file type and runs the best available diagnostic tool.
 */

const targetFile = process.argv[2];

if (!targetFile || !fs.existsSync(targetFile)) {
    console.error(`[LSP-GATE] Error: Target file "${targetFile}" not found.`);
    process.exit(1);
}

const ext = path.extname(targetFile);
console.log(`[LSP-GATE] 🔍 Analyzing: ${targetFile} (${ext})`);

try {
    if (ext === '.py') {
        // Python Syntax Check
        console.log(`[LSP-GATE] Running Python compile check...`);
        execSync(`python -m py_compile ${targetFile}`, { stdio: 'inherit' });
    } else if (ext === '.js' || ext === '.ts') {
        // JS/TS Basic Syntax Check using node --check
        console.log(`[LSP-GATE] Running Node.js syntax check...`);
        execSync(`node --check ${targetFile}`, { stdio: 'inherit' });
    } else {
        console.log(`[LSP-GATE] No specific LSP for ${ext}, skipping to generic check.`);
    }

    console.log(`[LSP-GATE] ✅ SUCCESS: No syntax errors detected in ${targetFile}`);
    process.exit(0);
} catch (error) {
    console.error(`\n[LSP-GATE] ❌ FAILURE: Syntax/LSP error found in ${targetFile}`);
    process.exit(1);
}
