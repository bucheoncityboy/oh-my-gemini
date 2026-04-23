# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 시스템 레벨의 제약 사항과 다중 에이전트 오케스트레이션을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다. 단순히 프롬프트를 넘어서, 물리적인 하네스(Harness)와 계층적 지식 베이스를 통해 무결점 코드를 지향합니다.

## ⚡ 퀵 스타트 (1분 설치)

다운로드 후 리포지토리 루트에서 다음 명령어를 실행하면 모든 환경 설정이 완료됩니다.

```bash
node install.js
```

이 명령어는 **스킬 자동 등록** 및 Windows용 **단축 명령어(`init_deep`, `harness`)**를 자동으로 생성합니다.

---

## 🛠️ 핵심 명령어 (CLI Shortcuts)

설치 후 터미널에서 즉시 사용할 수 있는 전용 명령어입니다.

### 1. `init_deep [depth]`
- **기능**: 프로젝트 전체 구조를 스캔하여 폴더별 `AGENTS.md` 지식 베이스를 자동 구축합니다.
- **예시**: `init_deep 2`
- **효과**: 에이전트가 각 모듈의 로컬 규칙과 안티 패턴을 인지하여 추론 정확도를 극대화합니다.

### 2. `harness [파일명] "[실행명령]" "[패턴]"`
- **기능**: LSP 문법 검사와 기능 로그 패턴 매칭을 수행하는 통합 하드 게이트입니다.
- **예시**: `harness core.py "python core.py" "SUCCESS,DONE"`
- **효과**: 성공 신호(`🏆 GATE OPEN`)가 나올 때까지 에이전트를 수정 루프에 가둡니다.

---

## 🏗️ 시스템 아키텍처 및 직급 체계

OMG는 **완전 격리형 컨텍스트(Fully Isolated Context)**와 기업형 계급 구조를 가집니다.

| 직급 | 페르소나 | 역할 및 독립성 |
| :--- | :--- | :--- |
| **Business Analyst (과장)** | 심문관 | 고객 인터뷰 및 비즈니스 명세 확정. (독립 세션) |
| **Solution Architect (차장)** | 전략가 | 기술 설계(`RALPLAN`) 및 지식 베이스(`init_deep`) 구축. (독립 세션) |
| **Project Manager (부장)** | 감독관 | 업무 분할(M/M-V) 및 서브 에이전트 병렬 배정. |
| **CTO (기술이사)** | 조율자 | 서브 에이전트 위임 및 **Self-Healing Loop** 통제. (중앙 조율) |
| **QA Lead (QA 팀장)** | 감사관 | 명세 준수 여부 무자비 감사 및 최종 승인. (독립 세션) |

---

## 🔄 워크플로우: 자기 치유 루프 (Self-Healing Loop)

1.  **Requirement Lock**: BA에 의해 요구사항 확정.
2.  **Technical Design**: Architect에 의해 설계 및 하네스 전략 수립.
3.  **Strict Execution**: 서브 에이전트는 `harness`를 통과할 때까지 독립 세션 내에서 **수정 -> 재검증** 루프를 반복합니다.
4.  **Ruthless Audit**: QA 팀장이 명세와 대조하여 단 1%의 오차도 없을 시 최종 승인.

---

## 📂 리포지토리 구조

```text
.
├── README.md           # 본 기술 명세 및 사용 가이드
├── SKILL.md            # 중앙 오케스트레이션 라우터 (CTO Engine)
├── install.js          # 원클릭 자동 설치 및 단축 명령어 생성기
├── init_deep.bat       # Windows용 단축 명령어 실행 파일
├── references/         # 직급별 독립 가이드라인 (Isolated Guides)
└── script/             # 시스템 레벨 하드 가드레일 (The Hard Gates)
    ├── harness.js      # 통합 검증 엔진 (LSP + Functional)
    └── init_deep.js    # 계층적 지식 베이스 구축 엔진
```

---
*Developed for professional AI-driven software engineering with Gemini CLI.*
