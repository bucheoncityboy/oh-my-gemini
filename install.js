const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * OMG Corporate Engine - One-Click Installer
 */

const HOME = os.homedir();
const TARGET_SKILL_DIR = path.join(HOME, '.gemini', 'skills', 'omg');
const SOURCE_DIR = __dirname;

console.log(`\n[INSTALLER] 🏢 Corporate Engine 설치 및 단축 명령어 설정을 시작합니다...`);

function copyRecursive(src, dest) {
    if (fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(child => copyRecursive(path.join(src, child), path.join(dest, child)));
    } else {
        fs.copyFileSync(src, dest);
    }
}

try {
    // 1. 스킬 디렉토리 복사
    if (!fs.existsSync(TARGET_SKILL_DIR)) fs.mkdirSync(TARGET_SKILL_DIR, { recursive: true });
    fs.copyFileSync(path.join(SOURCE_DIR, 'SKILL.md'), path.join(TARGET_SKILL_DIR, 'SKILL.md'));
    copyRecursive(path.join(SOURCE_DIR, 'references'), path.join(TARGET_SKILL_DIR, 'references'));

    // 2. 단축 명령어 배치 (Windows 전용 .bat)
    if (process.platform === 'win32') {
        fs.writeFileSync(path.join(SOURCE_DIR, 'init_deep.bat'), '@echo off\nnode script/init_deep.js %*');
        fs.writeFileSync(path.join(SOURCE_DIR, 'harness.bat'), '@echo off\nnode script/harness.js %*');
        console.log(`[INSTALLER] ⚡ 단축 명령어 생성 완료: init_deep, harness`);
    }

    console.log(`\n[INSTALLER] ✅ 모든 설정이 완료되었습니다!`);
    console.log(`--------------------------------------------------`);
    console.log(`이제 터미널에서 다음 명령어를 바로 사용하세요:`);
    console.log(`> init_deep 2`);
    console.log(`> /activate_skill omg`);
    console.log(`--------------------------------------------------\n`);

} catch (error) {
    console.error(`\n[INSTALLER] ❌ 설치 중 오류 발생:`, error.message);
    process.exit(1);
}
