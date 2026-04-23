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

## 🛡️ Deterministic Quality Control: Hard-Gatekeeping Harness v3.1

이 프로젝트는 AI 에이전트의 "Vibe Coding"을 방지하고 결정론적인 코드 품질을 보장하기 위해 고도화된 **Harness v3.1** 시스템을 운용합니다.

### 1. Multi-Layer Validation Gate
모든 코드 변경사항은 반영 전 다음의 3단계 게이트를 반드시 통과해야 합니다:
- **L0: Static Analysis**: `ruff` (Python) 및 `tsc` (TypeScript)를 통한 엄격한 문법 및 타입 체크.
- **L1: Structural Integrity**: **Hash-Anchored Edit** 시스템을 통해 기존 파일의 무결성과 에이전트의 수정 위치를 해시 단위로 대조 검증.
- **L2: Functional Audit**: 실제 실행 환경에서 로직의 정상 작동 및 기대 출력 패턴 매칭 검증.

### 2. Hash-Anchored Edit System
에이전트가 코드를 수정할 때 발생할 수 있는 '엉뚱한 위치 수정'이나 '코드 파괴'를 원천 차단합니다.
- 수정 전 파일의 각 라인별 SHA-256 해시 스냅샷 생성.
- 수정 시 에이전트가 인지하는 원본 해시와 실제 파일 해시가 일치할 때만 변경 허용.

### 3. OMG Persistence Engine (State Manager)
세션이 끊겨도 중단된 지점부터 즉시 복구할 수 있는 **상태 외부화(Externalization of State)** 메커니즘을 제공합니다.
- **Durable State Store**: `.omg/runtime_state.json`에 현재 단계, 작업 큐, 개별 작업의 성공/실패 여부를 실시간 기록.
- **Deterministic Replay**: 하네스 검증 성공 시 `taskId`별로 체크포인트를 생성하여 중복 작업 방지 및 지능적 연속성 보장.
- **Session Rehydration**: `init_deep` 실행 시 저장된 상태를 읽어와 에이전트의 컨텍스트를 즉시 복원.

---

## 🧠 공학적 기억 아키텍처: Memory Persistence Principle

OMG 프레임워크는 AI 에이전트의 지능을 두 가지 계층으로 분리하여 관리함으로써 세션의 연속성을 보장합니다.

### 1. 계층적 기억 구조 (Dual-Layer Memory)
*   **Layer 1: 컨텍스트 기억 (휘발성 RAM)**
    *   **실체**: 모델의 Context Window (컨텍스트 윈도우).
    *   **특성**: 실시간 대화 흐름을 파악하는 데 최적화되어 있으나, 세션 종료 시 소멸하며 토큰 제한에 따라 과거 정보를 망각함.
*   **Layer 2: 물리적 기억 (영구적 SSD)**
    *   **실체**: `AGENTS.md` (지식 압축 저장소) & `.omg/runtime_state.json` (상태 머신 저장소).
    *   **특성**: 하드디스크에 물리적으로 기록되어 세션과 무관하게 영구 보존됨.

### 2. 기억 전이 매커니즘: Context to Physics
에이전트의 일시적 인지 상태를 물리적 데이터로 변환하는 과정입니다.
*   **지식의 압축 (`init_deep`)**: 프로젝트 전수 조사를 통해 수만 줄의 소스 코드를 핵심 시그니처와 의존성 위주의 **'고밀도 요약본(AGENTS.md)'**으로 변환하여 저장합니다.
*   **상태의 박제 (`State Manager`)**: 도구 호출 결과와 성공/실패 여부를 시계열적으로 기록하여 **'어디까지 했는가'**에 대한 물리적 마커를 생성합니다.

### 3. 세션 복구 원리: Session Rehydration
새로운 세션 시작 시, 텅 빈 컨텍스트 기억에 물리적 기억을 주입하여 지능을 복원합니다.
1.  **Bootstrapping**: 세션 진입 시 에이전트가 최우선적으로 `AGENTS.md`와 `runtime_state.json`을 탐색합니다.
2.  **Knowledge Injection**: 물리적 기억을 읽어들여 에이전트의 컨텍스트 윈도우에 주입합니다.
3.  **Context Re-alignment**: 주입된 정보를 바탕으로 에이전트가 "현재 프로젝트의 성격, 마지막 작업 위치, 남은 태스크"를 즉시 인지하고 중단 없는 개발을 수행합니다.

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

## 📖 명령어 상세 가이드 (Tooling & Skill Manual)

OMG 프레임워크의 핵심 도구들은 AI 에이전트의 지능을 유지하고 코드 품질을 물리적으로 강제하기 위해 설계되었습니다.
---

## 📖 명령어 상세 가이드 (Tooling & Skill Manual)

### 1. `init_deep`: 고밀도 지식 베이스 압축 및 상태 동기화 🌟
`init_deep`은 프로젝트의 방대한 파일들을 AI가 한눈에 이해할 수 있도록 **"고밀도 지식 베이스(AGENTS.md)"**로 압축하고, 동시에 **"현재 작업 진행 상태"**를 동기화하는 OMG 프레임워크의 핵심 명령어입니다.

#### 1.1 기본 개념
단순히 파일을 읽는 것이 아니라, 프로젝트의 정적 지식(코드 구조)과 동적 상태(진행 상황)를 결합하여 `AGENTS.md`라는 **단일 진실 공급원(Single Source of Truth)**을 생성합니다.
- **입력**: 전체 소스 코드, 설정 파일, `.omg/runtime_state.json`
- **출력**: `AGENTS.md` (AI 전용 브리핑 문서)

#### 1.2 단계별 사용 시나리오
- **시나리오 A: 새 프로젝트 시작 시 (Initial Setup)**
  인터뷰가 끝나고 설계를 시작하기 전, 프로젝트의 뼈대를 AI에게 각인시킵니다.
  1. 명령어 실행: `init_deep 1` (수준 1: 주요 구조 파악)
  2. 결과: 루트 디렉토리의 핵심 파일들과 OMG 워크플로우 규칙이 `AGENTS.md`에 정리됩니다.

- **시나리오 B: 세션 복구 시 (Session Resume) 🌟 중요**
  컴퓨터가 꺼졌거나 새 세션을 열었을 때, 이전의 기억을 되살립니다.
  1. 명령어 실행: `init_deep`
  2. 작동 원리: 내부적으로 `.omg/runtime_state.json`을 읽어 "마지막 완료 작업", "현재 단계" 정보를 `AGENTS.md` 최상단에 배치합니다.
  3. 효과: 에이전트가 별도의 설명 없이도 **"Task #N부터 시작하면 되는군요"**라고 즉시 응답합니다.

- **시나리오 C: 대규모 수정 후 (Context Refresh)**
  파일을 많이 고쳐서 에이전트가 예전 코드를 기억할까 봐 걱정될 때 사용합니다.
  1. 명령어 실행: `init_deep 2` (수준 2: 함수/클래스 내부 로직까지 상세 분석)
  2. 효과: 최신 코드 상태로 컨텍스트가 업데이트되어 **환각(Hallucination) 현상을 방지**합니다.

#### 1.3 명령어 옵션 (CLI 명령어)
| 명령어 | 분석 깊이 | 권장 사용 시점 |
| :--- | :--- | :--- |
| **`init_deep 1`** | 표면 분석 | 프로젝트 초기 진입, 폴더 구조 파악 시 |
| **`init_deep 2`** | 중층 분석 | 주요 모듈의 인터페이스 및 API 명세 파악 시 |
| **`init_deep 3`** | 심층 분석 | 복잡한 비즈니스 로직이나 수학적 알고리즘 분석 시 |

#### 1.4 `init_deep` 실행 후 에이전트의 변화
- **상태 인지**: "현재 프로젝트의 EXEC 단계에 있으며, 특정 태스크가 성공했음을 인지함."
- **규칙 준수**: `AGENTS.md`에 박제된 `harness v3.2` 사용 규칙을 엄격히 준수.
- **파일 위치 파악**: 필요한 로직의 위치를 즉시 알고 리서치 비용 최소화.

#### 1.5 사용자 팁 (Pro-Tips)
- **세션 시작 시 필수**: 새로운 채팅창을 열면 가장 먼저 `/activate_skill omg` 후 `init_deep`을 입력하세요. 이것이 OmO 스타일의 **'중단 없는 개발'**을 만드는 가장 확실한 방법입니다.
- **상태 강제 업데이트**: 에이전트가 문맥에 맞지 않는 소리를 한다면 `init_deep`을 다시 실행하여 지능을 최신 상태로 강제 동기화(Sync)하세요.

### 2. `harness`: 결정론적 품질 게이트 (v3.2) 🛡️
단순 실행을 넘어 정적 분석, 무결성 검증, 상태 보고를 수행하는 통합 감사 엔진입니다.
- **L0 (Static)**: `ruff`, `tsc`를 이용해 문법과 타입을 강제합니다.
- **L1 (Structural)**: `Hash-Anchored Edit` 시스템을 통해 기존 코드의 해시와 대조하여 무단 변경이나 위치 이탈을 차단합니다.
- **L2 (Functional)**: 실제 런타임에서 기대하는 로그 패턴이 출력되는지 확인합니다.
- **상태 자동 보고**: 검증 성공 시 `taskId`별로 체크포인트를 생성하여 `StateManager`에 실시간으로 성공을 기록합니다.

---

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
