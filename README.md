# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 단순한 LLM 프롬프트 엔지니어링을 넘어, **시스템 레벨의 물리적 제약 사항(Systemic Constraints)**과 **다중 에이전트 오케스트레이션**을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다. 

## 🛠️ 핵심 기술 스택 (Tech Stack)

- **Orchestration**: Gemini CLI `invoke_agent` 기반 다중 세션 제어
- **Harness Engine**: Node.js (Runtime Verification & Log Analysis)
- **LSP Diagnostics**: Python `py_compile`, Node.js `check` (Static Analysis)
- **Knowledge Base**: Hierarchical `AGENTS.md` (Context Optimization)
- **Automation**: Windows Batch Scripting (CLI Shortcuts)

---

## 🏗️ 아키텍처 및 철학: 왜 기술적으로 우월한가?

### 1. 완전 격리형 컨텍스트 (Fully Isolated Context)
대부분의 에이전트는 하나의 대화창에서 모든 일을 수행하여 컨텍스트가 오염되지만, OMG는 모든 단계를 독립된 에이전트 세션으로 격리합니다.
- **Clean Desk Policy**: CTO(조율자)의 세션은 오직 전략적 의사결정만 남기며, 지저분한 코딩 에러와 수정 로그는 서브 에이전트의 독립 세션에서 처리되고 소멸됩니다.

### 2. 자기 치유 루프 (Self-Healing Loop)
지침(MD)에 의존하는 것이 아니라, **실제 시스템 종료 코드(Exit Code)**에 의존합니다.
- **Hard-Harness**: `harness.js`가 성공 신호(`🏆 GATE OPEN`)를 줄 때까지 에이전트는 독립 세션 내에서 스스로 코드를 수정하고 재검증하는 루프를 무한히 반복해야 합니다.

### 3. Human-in-the-Loop (Mandatory Interview Gate)
AI의 독단을 막기 위해 **사용자 승인(Requirement Lock)** 없이는 절대 설계를 시작하지 않는 물리적 차단 단계를 가집니다.

---

## 🏢 기업형 계급 구조 및 R&R

| 직급 | 페르소나 | 주요 책임 (Accountability) |
| :--- | :--- | :--- |
| **Business Analyst (과장)** | 심문관 | [독립 세션] 사용자와 인터뷰하여 **비즈니스 요구사항 명세(BRD)** 확정. |
| **Solution Architect (차장)** | 전략가 | [독립 세션] `RALPLAN` 설계 및 `init_deep` 지식 베이스 구축. |
| **Project Manager (부장)** | 감독관 | 업무 분할(M/M-V) 및 가용 서브 에이전트 병렬 배정. |
| **CTO (기술이사)** | 조율자 | [중앙 조율] 서브 에이전트 위임 및 **Self-Healing Loop** 통제. |
| **QA Lead (QA 팀장)** | 감사관 | [독립 세션] 명세 준수 여부 무자비 감사 및 최종 승인(Audit). |

---

## 🔄 워크플로우 상세 (Standard Operating Procedure)

1.  **Requirement Gating**: BA가 3~5개 질문 후 정지. 사용자가 **"승인"**해야 다음 단계 진행.
2.  **Deep Initialization**: Architect가 `init_deep`을 실행하여 프로젝트 전체에 계층적 지식(`AGENTS.md`) 주입.
3.  **Harness-Driven Exec**: 서브 에이전트가 코딩 후 `harness.js`로 **LSP + 기능 검사** 동시 수행.
4.  **Ruthless Audit**: QA 팀장이 하네스 로그와 명세서를 대조하여 단 1%의 오차도 없을 시 승인.

---

## 🛠️ 전용 명령어 가이드 (CLI Shortcuts)

| 명령어 | 기능 설명 | 사용 예시 |
| :--- | :--- | :--- |
| **`node install.js`** | 스킬 등록 및 단축 명령어 생성 | `node install.js` |
| **`init_deep [depth]`** | 계층적 지식 베이스 자동 구축 | `init_deep 2` |
| **`harness [file] [cmd] [pattern]`** | LSP 진단 + 기능 검증 통합 게이트 | `harness main.py "python main.py" "DONE"` |
| **`/activate_skill omg`** | 기업형 오케스트레이션 엔진 가동 | `/activate_skill omg` |

---

## 📂 리포지토리 구조

```text
.
├── SKILL.md            # 중앙 오케스트레이션 라우터 (CTO Engine)
├── install.js          # 원클릭 자동 설치 및 단축 명령어 생성기
├── init_deep.bat       # Windows용 단축 명령어 (KB 구축)
├── harness.bat         # Windows용 단축 명령어 (검증 게이트)
├── references/         # 직급별 격리된 가이드라인 (Isolated Guides)
│   ├── interview.md    # Business Analyst (BA) 전용 지침
│   ├── plan.md         # Solution Architect 전용 지침
│   ├── split.md        # Project Manager 전용 지침
│   ├── exec.md         # CTO 전용 지침
│   └── review.md       # QA Lead 전용 지침
└── script/             # 물리적 가드레일 엔진 (The Hard Gates)
    ├── harness.js      # LSP 진단 + 기능 검증 통합 엔진
    └── init_deep.js    # 프로젝트 지식 베이스 구축 엔진
```

---
*Developed for professional AI-driven software engineering with Gemini CLI.*
