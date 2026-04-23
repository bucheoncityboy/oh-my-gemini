# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 시스템 레벨의 제약 사항과 다중 에이전트 오케스트레이션을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다.

## 🤝 Human-in-the-Loop 인터뷰 (Mandatory Gate)

OMG의 가장 중요한 원칙은 **사용자와의 직접적인 소통**입니다. 에이전트는 독단적으로 판단하지 않으며, 다음 단계를 철저히 준수합니다.

1.  **Mandatory Interview**: Business Analyst가 3~5개의 질문을 던지고 **답변이 올 때까지 멈춥니다.**
2.  **BRD Summary**: 답변을 바탕으로 비즈니스 요구사항 명세서(BRD)를 작성합니다.
3.  **Explicit Confirmation**: 사용자가 명세서를 검토하고 **"Requirement Locked"** 또는 **"승인"**이라고 명시적으로 언급해야만 다음(Plan) 단계로 진행할 수 있습니다.

---

## 🏗️ 시스템 아키텍처 (Corporate Hierarchy)

1. **Business Analyst (과장)**: [심문 및 대기] 요구사항 확정 및 사용자의 최종 승인 획득.
2. **Solution Architect (차장)**: [기술 설계] 승인된 명세를 바탕으로 `RALPLAN` 수립.
3. **Project Manager (부장)**: [업무 분할] 미션 분할 및 서브 에이전트 배정.
4. **CTO (기술이사)**: [오케스트레이션] 독립 세션 위임 및 하네스 통제.
5. **QA Lead (QA 팀장)**: [최종 감사] 명세서 준수 여부 무자비 감사.

---

## 🛡️ 통합 하드 하네스 (Harness)

- **`script/harness.js`**: LSP 진단과 기능 검증을 결합한 통합 게이트입니다.
- **Self-Healing Loop**: 하네스를 통과할 때까지 에이전트가 스스로 수정과 검증을 반복합니다.

## ⚡ Quick Start

```bash
node install.js
```

설치 후 Gemini CLI 세션에서 다음 명령어로 시스템을 기동하십시오.
```bash
/activate_skill omg
```

---
*Developed for professional AI-driven software engineering.*
