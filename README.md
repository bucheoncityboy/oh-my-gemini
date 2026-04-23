# OMG: The Corporate Engine - 기업형 다중 에이전트 오케스트레이션 프레임워크

이 프레임워크는 Gemini CLI를 위해 설계된 고신뢰성 멀티 에이전트 개발 라이프사이클입니다. 모든 공정을 **철저한 기업 직급 체계**에 따라 운영하며, 상급자의 지시와 하급자의 보고, 그리고 QA 팀의 엄격한 감사를 통해 무결점 코드를 생산합니다.

## 🏢 조직도 및 에이전트 역할 (R&R)

본 프레임워크는 각 단계마다 전문화된 페르소나를 사용하여 컨텍스트 오염을 방지하고 책임 소재를 명확히 합니다.

1.  **Business Analyst (과장)**: 
    *   **역할**: 요구사항 분석 및 확정 (The Inquisitor).
    *   **책임**: 고객의 모호한 요청을 심문하여 100% 명확한 비즈니스 명세서로 변환합니다. 검증 기준(Success Criteria)을 초기에 확정합니다.
2.  **Solution Architect (차장)**: 
    *   **역할**: 기술 설계 및 전략 수립 (The Strategist).
    *   **책임**: 명세서를 바탕으로 `RALPLAN`을 작성합니다. 특히 `harness.js`가 감시할 로그 패턴과 기술적 가드레일을 설계합니다.
3.  **Project Manager (부장)**: 
    *   **역할**: 태스크 분할 및 자원 관리 (The Taskmaster).
    *   **책임**: 설계도를 원자적 미션(M/M-V)으로 쪼개고, 최적의 서브 에이전트를 배정하며 병렬 실행 스케줄을 확정합니다.
4.  **CTO (기술이사)**: 
    *   **역할**: 전체 공정 총괄 및 위임 (The Sovereign).
    *   **책임**: 서브 에이전트에게 작업을 하달할 때 **Self-Healing Loop** 지침을 주입합니다. 하네스 증거가 없는 보고는 무자비하게 반려합니다.
5.  **Quality Assurance (QA 팀장)**: 
    *   **역할**: 최종 코드 감사 및 승인 (The Auditor).
    *   **책임**: 완성된 코드가 비즈니스 명세와 단 1%라도 다를 경우 `REJECT`를 선언합니다. Zero-Warning/Zero-Debt 원칙을 고수합니다.

## ⚡ 1분 자동 설치 (Quick Start)

```bash
node install.js
```

설치 후 Gemini CLI 세션에서 활성화:
```bash
/activate_skill omg
```

---

## 🛡️ 기업 표준 가드레일 (Harness)

- **`script/harness.js` (통합 하드 하네스)**: 
    - **Phase 1 (LSP)**: 언어별 문법 및 컴파일 무결성 강제 진단.
    - **Phase 2 (Functional)**: 런타임 실행 및 로그 패턴 매칭 분석.
- **Self-Healing Loop**: 하위 에이전트는 하네스를 통과하여 `🏆 GATE OPEN` 신호를 획득할 때까지 스스로 코드를 수정하고 재검증하는 루프를 반복해야 합니다.

## 🛠 운영 원칙

- **Chain of Command**: 하위 직급은 상위 직급의 승인 문서(Locked, Ready, Split) 없이는 독자적으로 행동할 수 없습니다.
- **English Standard**: 모든 기술 명세, 서브 에이전트 프롬프트, 하네스 로그는 영문 표준화를 원칙으로 합니다.
- **Verification Authority**: 에이전트의 주관적 판단보다 시스템 하네스의 `Exit Code 0`과 `Pattern Match` 결과가 우선합니다.

---
*Gemini CLI를 위해 기업형 고신뢰성 철학으로 제작되었습니다.*
