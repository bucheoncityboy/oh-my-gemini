# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 단순한 LLM 프롬프트 엔지니어링을 넘어, **시스템 레벨의 물리적 제약 사항(Systemic Constraints)**과 **다중 에이전트 오케스트레이션**을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다. 

## 🛠️ 핵심 기술 스택 (Tech Stack)

- **Orchestration**: Gemini CLI `invoke_agent` 기반 다중 세션 제어
- **Harness Engine**: Node.js (Runtime Verification & Log Analysis)
- **LSP Diagnostics**: Python `py_compile`, Node.js `check` (Static Analysis)
- **Knowledge Base**: Hierarchical `AGENTS.md` (Context Optimization)
- **Automation**: Windows Batch Scripting (CLI Shortcuts)

---

## 🏗️ 아키텍처 및 철학 (Architecture & Philosophy)

### 1. 완전 격리형 컨텍스트 (Fully Isolated Context)
- **Clean Desk Policy**: CTO(조율자)의 세션은 오직 전략적 의사결정만 남기며, 지저분한 코딩 에러와 수정 로그는 서브 에이전트의 독립 세션에서 처리되고 소멸됩니다.

### 2. 자기 치유 루프 (Self-Healing Loop)
- **Hard-Harness**: `harness.js`가 성공 신호(`🏆 GATE OPEN`)를 줄 때까지 에이전트는 독립 세션 내에서 스스로 코드를 수정하고 재검증하는 루프를 무한히 반복해야 합니다.

### 3. Human-in-the-Loop (Mandatory Interview Gate)
- **인간 승인 기반**: AI의 독단을 막기 위해 **사용자 승인(Requirement Lock)** 없이는 절대 설계를 시작하지 않는 물리적 차단 단계를 가집니다.

---

## 🛡️ 공학적 심층 분석: 하네스 시스템 (Engineering Deep-Dive)

OMG의 하네스 시스템(`harness.js`)은 소프트웨어 공학 및 제어 공학의 원리를 AI 에이전트 환경에 이식한 핵심 장치입니다.

1. **Zero-Trust Sandboxing**: 에이전트의 실행 환경과 검증 로직을 분리하여, 에이전트가 결과를 조작하거나 허위 보고하는 것을 원천 차단합니다.
2. **Multi-stage Gatekeeping**: LSP 정적 진단(Phase 1)과 런타임 로그 분석(Phase 2)을 결합한 파이프라인 아키텍처를 따릅니다.
3. **Control Theory**: 피드백 제어 시스템을 구현하여, 하네스가 반환하는 오차 신호가 사라질 때까지 품질을 자동 수렴시킵니다.
4. **Separation of Concerns**: `invoke_agent` 격리를 통해 컨텍스트 오염을 방지하고 토큰 효율성을 극대화합니다.

---

## 🏢 기업형 계급 구조 및 R&R

| 직급 | 페르소나 | 주요 책임 (Accountability) |
| :--- | :--- | :--- |
| **Business Analyst (과장)** | 심문관 | 고객 인터뷰 및 **비즈니스 요구사항 명세(BRD)** 확정. (인간 승인 필수) |
| **Solution Architect (차장)** | 전략가 | 기술 설계(`RALPLAN`) 및 `init_deep` 지식 베이스 구축. |
| **Project Manager (부장)** | 감독관 | 업무 분할(M/M-V) 및 가용 서브 에이전트 병렬 배정. |
| **CTO (기술이사)** | 조율자 | 서브 에이전트 위임 및 **Self-Healing Loop** 통제. |
| **QA Lead (QA 팀장)** | 감사관 | 명세 준수 여부 무자비 감사 및 최종 승인(Audit). |

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
| **`init_deep [depth]`** | 계층적 지식 베이스(`AGENTS.md`) 자동 구축 | `init_deep 2` |
| **`harness [file] "[cmd]" "[pattern]"`** | 통합 하드 게이트 실행 (LSP + Functional) | `harness core.py "python core.py" "SUCCESS"` |
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
│   ├── interview.md    # Business Analyst (BA) 지침
│   ├── plan.md         # Solution Architect 지침
│   ├── split.md        # Project Manager 지침
│   ├── exec.md         # CTO 지침
│   └── review.md       # QA Lead 지침
└── script/             # 물리적 가드레일 엔진 (The Hard Gates)
    ├── harness.js      # LSP 진단 + 기능 검증 통합 엔진
    └── init_deep.js    # 프로젝트 지식 베이스 구축 엔진
```

---
## ⚡ Quick Start

1. 다운로드 후 `node install.js` 실행
2. Gemini CLI 세션에서 `/activate_skill omg` 입력

---
*Developed for professional AI-driven software engineering with Gemini CLI.*
