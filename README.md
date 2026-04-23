# OMG: Sisyphus Engine & 다중 에이전트 오케스트레이션 프레임워크

이 프레임워크는 Gemini CLI를 위한 고신뢰성 개발 라이프사이클로, **Oh My OpenAgent (OmO)** 아키텍처에서 영감을 받아 제작되었습니다. 단일 에이전트를 **전략적 조율자(Sisyphus)**로 변모시켜, 엄격한 런타임 하네스(Harness)를 통해 독립적인 서브 에이전트 팀을 관리하게 합니다.

## ⚡ 1분 자동 설치 (Quick Start)

다운로드 후 리포지토리 루트에서 다음 명령어를 실행하면 모든 설정이 완료됩니다.

```bash
node install.js
```

이 명령어는 다음을 자동으로 수행합니다:
1.  사용자 홈 디렉토리(`%USERPROFILE%`)에 스킬 폴더 생성.
2.  `SKILL.md` 및 `references/` 가이드라인 자동 복사 및 등록.
3.  현재 위치의 `script/` 하네스 즉시 사용 준비.

설치 후 Gemini CLI 세션에서 다음 명령어로 시작하세요:
```bash
/activate_skill omg
```

---

## 🚀 핵심 방법론: Sisyphus Engine

OMG는 단순한 선형 워크플로우 대신 **위임 및 검증(Delegation & Validation)** 모델을 사용합니다:

1.  **Prometheus (Interview)**: 사용자의 의도를 명확히 하고, 요구사항과 검증 기준을 확정합니다.
2.  **Senior Architect (Plan)**: 기술 전략(RALPLAN)을 설계하고 하네스를 위한 성공 패턴을 정의합니다.
3.  **Operations Manager (Split)**: 계획을 **원자적 미션(M)**과 **검증 미션(M-V)**으로 분해합니다. 각 미션은 특정 서브 에이전트에게 할당되며 병렬 실행 여부가 결정됩니다.
4.  **Sisyphus (Orchestration)**: `invoke_agent`를 통해 작업을 분배합니다. 서브 에이전트의 프롬프트에 "Hard Gatekeeping" 규칙을 주입하여 반드시 시스템 하네스를 사용하도록 강제합니다.

## 🛡️ 하네스 시스템 (Hard Gatekeeping)

코드 품질을 보장하고 에이전트의 탈선을 막기 위해 **Node.js 기반의 런타임 하네스**를 사용합니다.

### 1. `script/lsp_check.js` (문법 검문소)
- **자동 진단**: 파일 확장자(.py, .js 등)를 감지하고 `python -m py_compile` 또는 `node --check`를 통해 컴파일 체크를 수행합니다.
- **하드 블록**: 문법이 올바르지 않으면 미션을 완료할 수 없습니다.

### 2. `script/gatekeeper.js` (기능 검문소 / "The Eyes")
- **패턴 매칭**: 명령어를 실행하고 로그에서 계획 단계에서 정의한 "성공 패턴"을 검색합니다.
- **로그 분석**: 종료 코드뿐만 아니라 실제 출력 텍스트를 분석하여 의도한 결과가 나왔는지 확인합니다.
- **Gate Signal**: 종료 코드가 0이고 모든 패턴이 발견되어야만 `🏆 GATE OPEN` 신호를 보냅니다.

## 🛠 운영 표준

- **English First**: 내부 문서, 프롬프트 주입 및 하네스 로그는 전문성 유지를 위해 영어로 표준화되어 있습니다.
- **Context Indexing**: 에이전트는 토큰 절약을 위해 현재 단계에 필요한 레퍼런스 파일만 읽습니다.
- **Parallelism**: 독립적인 미션은 동시에 실행되어 작업 속도를 극대화합니다.
- **Zero-Tolerance**: 하네스의 명확한 증거(`✅ SUCCESS` 또는 `🏆 GATE OPEN`) 없이는 어떤 작업도 완료된 것으로 간주하지 않습니다.

---
*Gemini CLI를 위해 Oh My OpenAgent의 정신으로 제작되었습니다.*
