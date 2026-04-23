# OMG: The Corporate Engine (Sisyphus Architecture)

이 프로젝트는 시스템 레벨의 제약 사항과 다중 에이전트 오케스트레이션을 결합한 고신뢰성 소프트웨어 개발 프레임워크입니다.

## ⚡ 1분 자동 설치 (Quick Start)

```bash
node install.js
```

설치 후 터미널에서 다음 명령어를 즉시 사용할 수 있습니다:
- **`init_deep [depth]`**: 프로젝트 지식 베이스(AGENTS.md) 자동 구축.
- **`harness [file] [cmd] [pattern]`**: 통합 하드 검증 실행.

세션 활성화:
```bash
/activate_skill omg
```

---

## 🏢 핵심 기술: Corporate Deep Initialization (`init_deep`)

OMG는 프로젝트 전체에 **계층적 지식 베이스(Hierarchical Knowledge Base)**를 자동으로 구축합니다.

- **명령어**: `init_deep 2` (최대 깊이 2단계까지 AGENTS.md 생성)
- **효과**: 에이전트가 특정 모듈을 작업할 때 해당 폴더의 `AGENTS.md`만 참조하도록 유도하여 토큰을 절약하고 추론의 국소적 정확도를 극대화합니다.

## 🛡️ 통합 하드 하네스 (`harness`)

- **명령어**: `harness core.py "python core.py" "SUCCESS"`
- **기능**: LSP 진단과 기능 검증을 결합한 통합 게이트입니다.
- **Self-Healing Loop**: 하네스를 통과할 때까지 에이전트가 스스로 수정과 검증을 반복하도록 강제합니다.

---
*Developed for professional AI-driven software engineering.*
