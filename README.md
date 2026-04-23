# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 시스템 레벨의 제약 사항과 다중 에이전트 오케스트레이션을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다. 단순히 프롬프트를 넘어서, 물리적인 하네스(Harness)와 계층적 지식 베이스를 통해 무결점 코드를 지향합니다.

---

## 🛡️ 공학적 심층 분석: 하네스 시스템 (Engineering Deep-Dive)

OMG의 하네스 시스템(`harness.js`)은 소프트웨어 공학 및 제어 공학의 원리를 AI 에이전트 환경에 이식한 핵심 장치입니다.

### 1. 샌드박스 검증 및 제로-트러스트 (Zero-Trust Sandboxing)
에이전트의 주관적인 "성공" 주장을 배제하고, 시스템 레벨에서 분리된 **독립적 런타임(Harness)**이 결과를 판정합니다.
- **물리적 격리**: 에이전트의 실행 환경과 검증 로직을 분리하여, 에이전트가 결과를 조작하거나 허위 보고하는 것을 원천 차단합니다.
- **결정론적 판정**: 비결정론적인 AI의 답변을 **종료 코드(Exit Code)**와 **패턴 매칭**이라는 결정론적 지표로 변환하여 신뢰성을 확보합니다.

### 2. 다단계 게이트키핑 (Multi-stage Gatekeeping)
정적 분석과 동적 분석을 결합한 파이프라인 아키텍처를 따릅니다.
- **Phase 1: 정적 진단 (Static Analysis)**: LSP(Language Server Protocol) 및 컴파일러를 호출하여 구문 오류(Syntax Error)를 사전에 차단합니다. (Fail-Fast 원칙)
- **Phase 2: 동적 검증 (Dynamic Verification)**: 런타임 로그 분석을 통해 비즈니스 로직의 실제 작동 여부를 '오라클(Oracle, 기대 결과값)'과 대조하여 검증합니다.

### 3. 자기 치유 제어 루프 (Self-Healing Control Loop)
제어 공학의 **피드백 제어(Feedback Control)** 시스템을 구현하여 품질의 수렴을 보장합니다.
- **오차 보정**: 하네스가 반환하는 에러 로그는 피드백 신호가 되며, 에이전트는 이 신호가 사라질 때까지(Steady State) 수정을 반복합니다.
- **무한 루프 방지**: 에이전트의 독립 세션 내에서만 루프가 작동하여 메인 시스템의 자원 낭비를 방지하고 최적의 경로를 찾습니다.

### 4. 컨텍스트 격리 및 모듈화 (Separation of Concerns)
컴퓨터 아키텍처의 모듈화 원칙을 적용하여 컨텍스트 효율을 극대화합니다.
- **Context Sandboxing**: `invoke_agent`를 통해 각 부서(에이전트) 간의 정보를 격리함으로써 '컨텍스트 오염'을 방지하고 추론 능력을 현재 미션에만 집중시킵니다.
- **토큰 효율성**: 불필요한 에러 히스토리를 메인 세션에 남기지 않아 토큰 소모를 최적화하고 모델의 성능 저하를 막습니다.

---

## 🛠️ 핵심 명령어 (CLI Shortcuts)

| 명령어 | 기능 설명 | 사용 예시 |
| :--- | :--- | :--- |
| **`node install.js`** | 스킬 등록 및 단축 명령어 생성 | `node install.js` |
| **`init_deep [depth]`** | 계층적 지식 베이스(`AGENTS.md`) 자동 구축 | `init_deep 2` |
| **`harness [file] "[cmd]" "[pattern]"`** | 통합 하드 게이트 실행 (LSP + Functional) | `harness main.py "python main.py" "SUCCESS"` |

---

## 🏗️ 아키텍처 및 직급 체계

| 직급 | 역할 (Persona) | 독립성 (Isolation) |
| :--- | :--- | :--- |
| **Business Analyst** | 요구사항 심문 및 확정 | 독립 세션 + 인간 승인 게이트 |
| **Solution Architect** | 기술 설계 및 KB 구축 | 독립 세션 + RALPLAN 수립 |
| **Project Manager** | 태스크 분할 및 스케줄링 | 중앙 조율 보조 |
| **CTO** | 전체 오케스트레이션 및 위임 | 중앙 전략 통제 및 루프 관리 |
| **QA Lead** | 무자비한 최종 감사 및 승인 | 독립 세션 + 교차 검증 |

---

## ⚡ Quick Start

```bash
node install.js
/activate_skill omg
```

---
*Developed for professional AI-driven software engineering with Gemini CLI.*
