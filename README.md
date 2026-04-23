# OMG: The Corporate Engine (State Machine Edition v2.1)

이 프로젝트는 시스템 레벨의 **물리적 상태 머신(State Machine)**과 **도구 제한(Hardware Lock)**을 결합한 엔터프라이즈급 AI 개발 프레임워크입니다. AI의 주관적 판단을 배제하고 오직 시스템 하네스와 인간의 승인에 의해서만 전진하는 고신뢰성 아키텍처를 지향합니다.

## 🛡️ 핵심 제어 기술 (Enforcement Technologies)

### 1. Strict Sequential State Machine
각 단계는 시스템에 의해 물리적으로 잠겨 있습니다.
- **[인터뷰]** 단계가 'Requirement Locked' 상태가 되기 전까지는 하위 에이전트의 머릿속에 '기술 설계'나 '구현' 지침이 로드되지 않습니다.

### 2. Intent Censorship & Gating (CTO Filter)
- 최상위 조율자인 **CTO**가 모든 서브 에이전트의 응답을 가로채서 검열합니다.
- 인터뷰 단계에서 코드를 작성하거나 파일을 생성하려는 '탈선(Derailment)' 시도가 발견되면 즉시 응답을 반려하고 재작성을 명령합니다.

### 3. Logical Hardware Lock
- **Business Analyst** 모드에서는 `write_file`, `run_shell_command` 등의 도구가 논리적으로 비활성화됩니다. 에이전트는 본인의 도구가 막혀 있다고 인지하여 오직 '질문'과 '대화'에만 집중합니다.

---

## 🏗️ 공학적 심층 분석: 하네스 시스템 (Harness System)

OMG의 하네스는 제어 공학의 피드백 루프를 소프트웨어 품질 보증에 이식했습니다.

- **Zero-Trust Sandboxing**: 시스템 레벨에서 분리된 독립적 런타임이 결과를 판정하여 에이전트의 허위 보고를 차단합니다.
- **Multi-stage Gatekeeping**: LSP 정적 진단(Phase 1)과 런타임 로그 패턴 매칭(Phase 2)을 결합한 파이프라인 아키텍처.
- **Self-Healing Loop**: `🏆 GATE OPEN` 신호가 나올 때까지 에이전트가 스스로 수정과 재검증을 반복하는 자기 치유 메커니즘.

---

## 🏢 기업형 계급 구조 및 R&R

| 직급 | 페르소나 | 주요 책임 (Accountability) |
| :--- | :--- | :--- |
| **Business Analyst (과장)** | 심문관 | [독립 세션] 사용자와 인터뷰하여 **BRD** 확정. **인간 승인 필수.** |
| **Solution Architect (차장)** | 전략가 | [독립 세션] `RALPLAN` 설계 및 `init_deep` 지식 베이스 구축. |
| **Project Manager (부장)** | 감독관 | 업무 분할(M/M-V) 및 가용 서브 에이전트 병렬 배정. |
| **CTO (기술이사)** | 조율자 | [중앙 조율] 전체 공정 총괄, 의도 검열 및 **State Machine** 관리. |
| **QA Lead (QA 팀장)** | 감사관 | [독립 세션] 명세 준수 여부 무자비 감사 및 최종 승인(Audit). |

---

## 🛠️ 전용 명령어 가이드 (CLI Shortcuts)

| 명령어 | 기능 설명 | 사용 예시 |
| :--- | :--- | :--- |
| **`node install.js`** | 스킬 등록 및 단축 명령어 생성 | `node install.js` |
| **`init_deep [depth]`** | 계층적 지식 베이스(`AGENTS.md`) 자동 구축 | `init_deep 2` |
| **`harness [file] "[cmd]" "[pattern]"`** | LSP 진단 + 기능 검증 통합 게이트 | `harness core.ts "npx tsx core.ts" "DONE"` |
| **`/activate_skill omg`** | 기업형 오케스트레이션 엔진 가동 | `/activate_skill omg` |

---

## 📂 리포지토리 구조

```text
.
├── src/                # TypeScript 기반 코어 엔진 (Harness, Init-Deep)
├── references/         # 직급별 격리된 가이드라인 (Isolated Guides)
├── SKILL.md            # 중앙 오케스트레이션 라우터 및 상태 머신 정의
├── install.js          # 원클릭 자동 설치 및 환경 구성기
├── init_deep.bat       # Windows용 단축 명령어 (KB 구축)
├── harness.bat         # Windows용 단축 명령어 (검증 게이트)
├── package.json        # 종속성 및 스크립트 관리
└── tsconfig.json       # TypeScript 컴파일러 설정
```

---
*Developed for professional AI-driven software engineering with Zero-Tolerance for derailment.*
