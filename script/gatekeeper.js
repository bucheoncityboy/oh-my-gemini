const { spawn } = require('child_process');

/**
 * OMG Gatekeeper Harness (OmO-style)
 * 
 * Usage: node script/gatekeeper.js --exec "command" --expect "pattern1,pattern2"
 */

const args = process.argv.slice(2);
const execCmd = args[args.indexOf('--exec') + 1];
const expectPatterns = args[args.indexOf('--expect') + 1]?.split(',') || [];

if (!execCmd) {
    console.error('[GATEKEEPER] Error: No execution command provided.');
    process.exit(1);
}

console.log(`\n[GATEKEEPER] 🛡️ Starting validation gate...`);
console.log(`[GATEKEEPER] 🚀 Executing: ${execCmd}`);
console.log(`[GATEKEEPER] 🔍 Looking for patterns: ${expectPatterns.join(', ')}`);
console.log('--------------------------------------------------');

const [cmd, ...cmdArgs] = execCmd.split(' ');
const child = spawn(cmd, cmdArgs, { shell: true });

let output = '';
child.stdout.on('data', (data) => {
    const chunk = data.toString();
    output += chunk;
    process.stdout.write(chunk);
});

child.stderr.on('data', (data) => {
    const chunk = data.toString();
    output += chunk;
    process.stderr.write(chunk);
});

child.on('close', (code) => {
    console.log('\n--------------------------------------------------');
    console.log(`[GATEKEEPER] ⏹️ Process exited with code: ${code}`);

    const findings = expectPatterns.map(p => ({
        pattern: p,
        found: output.includes(p)
    }));

    const allPatternsFound = findings.every(f => f.found);
    const success = (code === 0 && allPatternsFound);

    findings.forEach(f => {
        console.log(`[GATEKEEPER] ${f.found ? '✅' : '❌'} Pattern "${f.pattern}" ${f.found ? 'found' : 'NOT found'}`);
    });

    if (success) {
        console.log(`\n[GATEKEEPER] 🏆 GATE OPEN: Validation successful.`);
        process.exit(0);
    } else {
        console.log(`\n[GATEKEEPER] ⛔ GATE CLOSED: Validation failed.`);
        if (code !== 0) console.log(`[GATEKEEPER] Reason: Non-zero exit code.`);
        if (!allPatternsFound) console.log(`[GATEKEEPER] Reason: Missing expected log patterns.`);
        process.exit(1);
    }
});
