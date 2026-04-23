# OMG: The Corporate Engine (State Machine Architecture)

이 프로젝트는 시스템 레벨의 **상태 머신(State Machine)**과 **도구 제한(Tool Restriction)**을 통해 AI의 독단적인 행동을 원천 차단하는 고신뢰성 개발 프레임워크입니다.

## 🔒 핵심 제어 기술 (Enforcement Technologies)

1.  **Strict Sequential State Machine**: 인터뷰([STATE:INTERVIEW])가 물리적으로 완료되지 않으면 기술 설계([STATE:PLAN])와 구현 단계의 지침이 시스템에 의해 잠금(Lock) 처리됩니다.
2.  **Hardware Lock Simulation**: Business Analyst 단계에서는 `write_file`, `run_shell_command` 등의 도구가 논리적으로 비활성화되어 오직 심문(Inquiry)에만 집중하게 합니다.
3.  **Intent Censorship (CTO Filter)**: 서브 에이전트의 응답을 상위 조율자(CTO)가 검열합니다. 인터뷰 단계에서 코드가 발견되면 즉시 반려하고 재작성을 명령합니다.

---

## 🏗️ 단계별 하드 게이트 (Hard Gates)

- **[인터뷰]**: 3~5개 질문 후 강제 중단. 사용자 승인 없이는 다음 단계 지침 열람 불가.
- **[설계]**: 비즈니스 요구사항을 기술 설계로 변환. 하네스 검증 패턴 정의.
- **[구현]**: `harness.ts`를 통과할 때까지 무한 **Self-Healing Loop**.
- **[감사]**: 독립된 QA 팀장의 무자비한 교차 검토.

---

## ⚡ Quick Start

```bash
node install.js
/activate_skill omg
```

---
*Developed for professional AI-driven software engineering with Zero-Tolerance for derailment.*
