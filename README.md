# OMG: The Corporate Engine (v2.0 TypeScript Edition)

이 프로젝트는 시스템 레벨의 물리적 제약 사항과 **TypeScript 기반의 엄격한 데이터 규격**을 결합한 엔터프라이즈급 AI 개발 프레임워크입니다.

## 🛠️ v2.0 기술 스택 (TypeScript Stack)

- **Language**: TypeScript (Strict Mode)
- **Runtime**: Node.js + `tsx` (Direct TS Execution)
- **Orchestration**: Gemini CLI `invoke_agent` 기반 컨텍스트 격리
- **Harness**: `src/harness.ts` (Interface-based Verification)
- **Knowledge Base**: `src/init_deep.ts` (Type-safe Hierarchy Engine)

---

## 🏗️ 아키텍처 변화: 왜 TypeScript인가?

1. **데이터 규격화 (Strict Interfaces)**: 모든 미션과 검증 결과가 인터페이스로 정의되어, 에이전트 간 통신 시 오차가 발생할 확률을 코딩 단계에서 원천 차단합니다.
2. **AI 최적화 (LSP Synergy)**: 타입스크립트의 정교한 LSP를 통해 에이전트(저) 스스로 실수를 교정하는 능력이 비약적으로 향상되었습니다.
3. **무결점 하네스**: `harness.ts`는 이제 단순 텍스트 비교를 넘어, 타입 기반의 구조화된 로그 분석을 수행합니다.

---

## ⚡ 퀵 스타트 (1분 설치)

```bash
node install.js
```

설치 시 다음 단축 명령어가 생성됩니다:
- **`init_deep [depth]`**: 프로젝트 전체 지식 베이스 구축 (TypeScript Engine).
- **`harness [file] "[cmd]" "[pattern]"`**: 통합 하드 게이트 검증 (TypeScript Engine).

---

## 🏢 조직도 및 R&R

| 직급 | 역할 | 독립성 |
| :--- | :--- | :--- |
| **Business Analyst** | 요구사항 확정 | 독립 세션 + 인간 승인 |
| **Solution Architect** | 기술 설계 (TS) | 독립 세션 + RALPLAN 수립 |
| **Project Manager** | 업무 분할 | 중앙 조율 보조 |
| **CTO** | 전체 조율 | 하부 위임 및 **Self-Healing Loop** 통제 |
| **QA Lead** | 무자비 감사 | 독립 세션 + 교차 검증 |

---

## 📂 리포지토리 구조

```text
.
├── src/                # TypeScript 소스 코드 (Core Engines)
│   ├── harness.ts      # 통합 검증 하네스
│   └── init_deep.ts    # 지식 베이스 구축 엔진
├── references/         # 직급별 격리 가이드라인 (MD)
├── package.json        # 종속성 및 스크립트 관리
├── tsconfig.json       # TypeScript 컴파일러 설정
├── install.js          # 원클릭 환경 구성기
└── README.md           # 본 기술 명세서
```

---
*Developed for mission-critical AI-driven engineering.*
