# OMG: The Corporate Engine - 기업형 다중 에이전트 오케스트레이션 프레임워크

이 프레임워크는 Gemini CLI를 위한 **완전 격리형(Fully Isolated)** 멀티 에이전트 개발 라이프사이클입니다. 단일 에이전트를 **최상위 조율자(CTO)**로 변모시켜, 독립된 전문가 부단들을 통해 컨텍스트 오염이 없는 무결점 코드를 생산합니다.

## 🛡️ 완전 격리형 아키텍처 (Fully Isolated Context)

본 프레임워크의 핵심은 **"부서 간 컨텍스트 격리"**에 있습니다. 각 단계는 독립된 서브 에이전트 세션에서 수행됩니다.

- **컨텍스트 오염 방지**: `Business Analyst`는 기술 설계를 모르고, `Solution Architect`는 지저분한 코딩 에러 로그를 보지 않습니다. 각 에이전트는 오직 자신에게 주어진 **명세서(Document)**에만 집중합니다.
- **Clean CTO History**: 최상위 조율자인 CTO의 세션은 오직 전략적 의사결정과 결과 보고로만 구성되어 깨끗하게 유지됩니다. 세부적인 시행착오는 서브 에이전트의 독립된 컨텍스트 내에서 해결되고 사라집니다.

## 🏢 조직도 및 에이전트 역할 (R&R)

1.  **Business Analyst (과장)**: [독립 세션] 비즈니스 요구사항 분석 및 확정.
2.  **Solution Architect (차장)**: [독립 세션] 기술 아키텍처 설계 및 `RALPLAN` 수립.
3.  **Project Manager (부장)**: [CTO 보조] 태스크 분할(M/M-V) 및 자원 배분.
4.  **CTO (기술이사)**: [중앙 조율] 전체 공정 총괄 및 서브 에이전트 위임 실행.
5.  **QA Lead (QA 팀장)**: [독립 세션] 명세 준수 여부 및 코드 품질 무자비 감사.

## 🛡️ 하드 가드레일 시스템 (Harness)

- **`script/harness.js` (통합 하드 하네스)**: 
    - **LSP Gate**: 문법 및 컴파일 무결성 강제 진단.
    - **Functional Gate**: 런타임 실행 및 로그 패턴 매칭 분석.
- **Self-Healing Loop**: 서브 에이전트는 `🏆 GATE OPEN` 신호를 획득할 때까지 독립된 세션 내에서 스스로 수정과 검증을 반복합니다.

## 🛠 운영 표준

- **English Standard**: 모든 기술 명세, 서브 에이전트 프롬프트, 하네스 로그는 영문 표준화.
- **Strict Delegation**: CTO는 직접 작업하지 않으며, 모든 공정은 `invoke_agent`를 통한 독립 부서 위임으로 진행됩니다.
- **Zero-Tolerance Audit**: QA 팀장의 독립적인 감사 통과 없이는 어떠한 결과물도 최종 승인되지 않습니다.

## ⚡ 1분 자동 설치 (Quick Start)

```bash
node install.js
```

설치 후 Gemini CLI 세션에서 활성화:
```bash
/activate_skill omg
```

---
*Gemini CLI를 위해 기업형 컨텍스트 격리 철학으로 제작되었습니다.*
