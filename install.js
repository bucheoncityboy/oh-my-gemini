const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * OMG Sisyphus Engine - One-Click Installer
 */

const HOME = os.homedir();
const TARGET_SKILL_DIR = path.join(HOME, '.gemini', 'skills', 'omg');
const SOURCE_DIR = __dirname;

console.log(`\n[INSTALLER] 🛠  OMG Sisyphus Engine 설치를 시작합니다...`);

function copyRecursive(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = stats && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach((child) => {
            copyRecursive(path.join(src, child), path.join(dest, child));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

try {
    // 1. 스킬 디렉토리 생성
    if (!fs.existsSync(TARGET_SKILL_DIR)) {
        console.log(`[INSTALLER] 📂 디렉토리 생성 중: ${TARGET_SKILL_DIR}`);
        fs.mkdirSync(TARGET_SKILL_DIR, { recursive: true });
    }

    // 2. 핵심 파일 복사 (SKILL.md, references/)
    console.log(`[INSTALLER] 📑 스킬 파일 복사 중...`);
    fs.copyFileSync(path.join(SOURCE_DIR, 'SKILL.md'), path.join(TARGET_SKILL_DIR, 'SKILL.md'));
    copyRecursive(path.join(SOURCE_DIR, 'references'), path.join(TARGET_SKILL_DIR, 'references'));

    console.log(`\n[INSTALLER] ✅ 설치 완료!`);
    console.log(`--------------------------------------------------`);
    console.log(`1. 스킬 위치: ${TARGET_SKILL_DIR}`);
    console.log(`2. 하네스 위치: ${path.join(SOURCE_DIR, 'script')}`);
    console.log(`\n이제 Gemini CLI에서 다음 명령어로 시작하세요:`);
    console.log(`> /activate_skill omg`);
    console.log(`--------------------------------------------------\n`);

} catch (error) {
    console.error(`\n[INSTALLER] ❌ 설치 중 오류 발생:`, error.message);
    process.exit(1);
}
