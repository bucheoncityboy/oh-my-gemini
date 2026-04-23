# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 단순한 LLM 프롬프트 엔지니어링을 넘어, **시스템 레벨의 제약 사항(Systemic Constraints)**과 **다중 에이전트 오케스트레이션**을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다.

## 🛠️ 기술적 차별점: 왜 OMG인가?

일반적인 AI 에이전트 워크플로우(단순 MD 프롬프팅)와 OMG의 기술적 차이점은 다음과 같습니다.

| 비교 항목 | 일반적인 에이전트 (Simple MD) | OMG (The Corporate Engine) |
| :--- | :--- | :--- |
| **검증 방식** | 에이전트의 "주관적 판단"에 의존 | **물리적 하네스(`harness.js`)**의 Exit Code에 의존 |
| **컨텍스트 관리** | 대화가 길어질수록 이전 에러 로그가 쌓여 오염됨 | **`invoke_agent`를 통한 컨텍스트 격리** (Clean Desk 정책) |
| **에러 대응** | "미안해, 다시 할게" 식의 반복 | **Self-Healing Loop**: 성공할 때까지 독립 세션에서 수정 반복 |
| **코드 리뷰** | 작성한 에이전트가 스스로 검토 (자기 합리화) | **독립된 QA Lead 에이전트**에 의한 무자비한 교차 검증 |
| **LSP 강제** | "LSP를 돌려줘"라고 요청만 함 | **Harness Phase 1**에서 문법 에러 시 프로세스 즉시 차단 |

---

## 🏗️ 시스템 아키텍처 (System Architecture)

OMG는 **계층적 오케스트레이션(Hierarchical Orchestration)** 구조를 가집니다.

### 1. Orchestration Layer (The CTO)
- 최상위 조율자인 CTO는 직접 코드를 작성하지 않습니다. 
- 오직 전문가(Sub-Agents)를 호출(`invoke_agent`)하고, 그들로부터 올라온 **하네스 증거(Harness Evidence)**만을 검토합니다.

### 2. Isolation Layer (Context Sandboxing)
- 각 단계(BA, Architect, Exec, QA)는 독립된 서브 세션에서 실행됩니다.
- 이전 단계의 결과물(명세서, 설계도)만 데이터로 전달되며, 중간 과정의 노이즈는 부서 간에 전파되지 않습니다.

### 3. Validation Layer (The Hard Harness)
- **`script/harness.js`**: Node.js 기반의 엄격한 검증 엔진입니다.
- **Phase 1 (LSP/Syntax)**: Python `py_compile`, Node `check` 등을 통해 코드의 정적 무결성을 보장합니다.
- **Phase 2 (Functional/Pattern)**: 코드를 실제 실행하고, 출력 로그에서 기대 패턴(Regex/String)을 추출하여 비즈니스 로직 일치 여부를 판정합니다.

---

## 🔄 워크플로우 (The Sovereign Workflow)

1.  **Business Analyst (과장)**: 고객 인터뷰를 통해 `Business Requirements` 확정.
2.  **Solution Architect (차장)**: 기술 설계서 `RALPLAN` 및 하네스 검증 패턴 설계.
3.  **Project Manager (부장)**: 태스크 분할 및 독립 에이전트 배정.
4.  **Sub-Agent Implementation**: **Self-Healing Loop** 내에서 `harness.js`를 통과할 때까지 코딩 및 자체 검증.
5.  **QA Lead (QA 팀장)**: 독립된 세션에서 명세서와 결과물을 대조하여 최종 감사(Audit).

---

## 📂 프로젝트 구조 (Structure)

```text
.
├── README.md           # 본 기술 명세서
├── SKILL.md            # 중앙 오케스트레이션 라우터 및 지휘 체계 정의
├── install.js          # 자동 설치 및 환경 구성 스크립트
├── references/         # 직급별 독립 가이드라인 (Isolated Guides)
│   ├── interview.md    # Business Analyst용 지침
│   ├── plan.md         # Solution Architect용 지침
│   ├── split.md        # Project Manager용 지침
│   ├── exec.md         # CTO(Orchestrator)용 지침
│   └── review.md       # QA Lead용 감사 지침
└── script/             # 시스템 레벨 가드레일 (The Hard Gates)
    └── harness.js      # LSP 진단 + 기능 검증 통합 하네스
```

## 🛠️ 운영 표준 (Operational Standards)

- **English Standard**: 기술적 정밀도를 위해 모든 내부 지침, 에이전트 간 통신, 하네스 로그는 영문을 사용합니다.
- **Zero-Tolerance**: 하네스 결과(`🏆 GATE OPEN`)와 QA 승인이 없는 코드는 결코 승인되지 않습니다.
- **Minimal Context**: 에이전트는 현재 단계에 필요한 데이터만 로드하여 토큰 효율을 극대화하고 추론 정확도를 높입니다.

---
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
