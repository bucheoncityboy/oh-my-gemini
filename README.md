# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 시스템 레벨의 제약 사항과 다중 에이전트 오케스트레이션을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다.

## 🏢 핵심 기술: Corporate Deep Initialization (/init-deep)

OMG는 프로젝트 전체에 **계층적 지식 베이스(Hierarchical Knowledge Base)**를 자동으로 구축합니다.

- **`script/init_deep.js`**: 프로젝트의 모든 주요 디렉토리를 스캔하고 각 폴더의 목적, 규칙, 안티 패턴을 담은 `AGENTS.md`를 생성합니다.
- **Context Optimization**: 에이전트가 특정 모듈을 작업할 때 해당 폴더의 `AGENTS.md`만 참조하도록 유도하여 토큰을 절약하고 추론의 국소적 정확도를 극대화합니다.

## 🛡️ 통합 하드 하네스 (Harness)

- **`script/harness.js`**: LSP 진단과 기능 검증을 결합한 통합 게이트입니다.
- **Self-Healing Loop**: 하네스를 통과할 때까지 에이전트가 스스로 수정과 검증을 반복하는 지능적인 워크플로우를 강제합니다.

## 🏗️ 시스템 아키텍처 (Corporate Hierarchy)

1. **Business Analyst (과장)**: 요구사항 확정.
2. **Solution Architect (차장)**: `RALPLAN` 수립 및 `/init-deep` 지식 베이스 구축.
3. **Project Manager (부장)**: 미션 분할 및 서브 에이전트 배정.
4. **CTO (기술이사)**: **Fully Isolated** 세션 위임 및 오케스트레이션.
5. **QA Lead (QA 팀장)**: Zero-Tolerance 원칙의 최종 코드 감사.

---

## ⚡ Quick Start

```bash
node install.js
node script/init_deep.js 2  # 지식 베이스 구축 (깊이 2)
```

설치 후 Gemini CLI 세션에서 다음 명령어로 시스템을 기동하십시오.
```bash
/activate_skill omg
```

---
*Developed for professional AI-driven software engineering.*
