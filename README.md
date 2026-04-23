# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 시스템 레벨의 제약 사항과 다중 에이전트 오케스트레이션을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다. 단순히 프롬프트를 넘어서, 물리적인 하네스(Harness)와 계층적 지식 베이스, 그리고 **인간 승인 기반의 워크플로우**를 통해 무결점 코드를 지향합니다.

## 🤝 핵심 철학: Human-in-the-Loop (Mandatory Gate)

OMG는 AI의 독단적인 진행을 원천 차단합니다. 모든 프로젝트는 다음의 **인간-에이전트 동기화** 과정을 거쳐야 합니다.

1.  **Stop-and-Wait Interview**: Business Analyst는 요구사항 분석 후 3~5개의 질문을 던지고 **답변이 올 때까지 모든 실행을 중단**합니다. AI가 답변을 가정하여 다음 단계로 넘어가는 것은 기술적으로 불가능하도록 설계되었습니다.
2.  **Requirement Lock**: 사용자가 명세서를 검토하고 **"승인"** 또는 **"Requirement Locked"**라고 명시적으로 화답해야만 다음(Plan) 단계의 게이트가 열립니다.
3.  **Cross-Verification**: 모든 결과물은 인간의 승인된 명세서와 하드 하네스의 결과물을 대조하여 최종 감사(QA)를 받습니다.

---

## 🛠️ 핵심 명령어 (CLI Shortcuts)

설치 후 터미널에서 즉시 사용할 수 있는 전용 명령어입니다.

- **`node install.js`**: 스킬 등록 및 단축 명령어(`init_deep`, `harness`) 자동 생성.
- **`init_deep [depth]`**: 프로젝트 지식 베이스(`AGENTS.md`) 자동 구축.
- **`harness [file] "[cmd]" "[pattern]"`**: LSP 진단 + 기능 검증 통합 게이트.

---

## 🏗️ 시스템 아키텍처 및 직급 체계

OMG는 **완전 격리형 컨텍스트(Fully Isolated Context)** 환경에서 작동합니다.

| 직급 | 페르소나 | 역할 및 독립성 |
| :--- | :--- | :--- |
| **Business Analyst (과장)** | 심문관 | [독립 세션] 고객 인터뷰 및 명세 확정. **인간 승인 획득 필수.** |
| **Solution Architect (차장)** | 전략가 | [독립 세션] 기술 설계(`RALPLAN`) 및 지식 베이스 구축. |
| **Project Manager (부장)** | 감독관 | 업무 분할(M/M-V) 및 서브 에이전트 병렬 배정. |
| **CTO (기술이사)** | 조율자 | 서브 에이전트 위임 및 **Self-Healing Loop** 통제. |
| **QA Lead (QA 팀장)** | 감사관 | [독립 세션] 명세 준수 여부 무자비 감사 및 최종 승인. |

---

## 🛡️ 통합 하드 하네스 (`harness`)

- **Phase 1 (LSP/Syntax)**: Python/JS/TS 문법 및 컴파일 무결성 강제 진단.
- **Phase 2 (Functional)**: 런타임 실행 및 로그 패턴 매칭 분석. 성공 신호(`🏆 GATE OPEN`) 확인 필수.

---
## ⚡ Quick Start

```bash
node install.js
/activate_skill omg
```

---
*Developed for professional AI-driven software engineering with Gemini CLI.*
