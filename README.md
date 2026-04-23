# OMG: Sisyphus Engine & Multi-Agent Orchestration Framework

This framework is a high-integrity development lifecycle for Gemini CLI, inspired by the **Oh My OpenAgent (OmO)** architecture. It transforms a single agent into a **Strategic Orchestrator (Sisyphus)** that manages a team of independent sub-agents through strict runtime harnesses.

## 🚀 Core Methodology: The Sisyphus Engine

Unlike standard linear workflows, OMG uses a **Delegation & Validation** model:

1.  **Prometheus (Interview)**: Clarifies intent and locks requirements and validation criteria.
2.  **Senior Architect (Plan)**: Designs the technical strategy (RALPLAN) and defines success patterns for the harness.
3.  **Operations Manager (Split)**: Deconstructs the plan into **Atomic Missions (M)** paired with **Validation Missions (M-V)**. Missions are assigned to specific sub-agents and flagged for **Parallel Execution**.
4.  **Sisyphus (Orchestration)**: Dispatches tasks via `invoke_agent`. It injects "Hard Gatekeeping" rules into sub-agent prompts, forcing them to use the system harness.

## 🛡️ The Harness System (Hard Gatekeeping)

We utilize a **Node.js-based Runtime Harness** to ensure zero-derailment and absolute code quality.

### 1. `script/lsp_check.js` (The Syntax Gate)
- **Automatic Diagnostics**: Detects file types (.py, .js, etc.) and runs compilation checks (`python -m py_compile`, `node --check`).
- **Hard Block**: If syntax is invalid, the mission cannot be completed.

### 2. `script/gatekeeper.js` (The Functional Gate / "The Eyes")
- **Pattern Matching**: Executes commands and searches logs for specific "Success Patterns" defined during the Plan phase.
- **Log Analysis**: Moves beyond exit codes. It analyzes the actual text output to confirm the "Desired Outcome."
- **Gate Signal**: Only outputs `🏆 GATE OPEN` if both the exit code is 0 and all expected patterns are found.

## 📂 System Structure

```text
.gemini/skills/omg/
├── SKILL.md                # The Multi-Agent Orchestration Router
└── references/
    ├── interview.md        # [PHASE:INTERVIEW] Requirements & Validation Lock
    ├── plan.md             # [PHASE:PLAN] RALPLAN & Harness Strategy
    ├── split.md            # [PHASE:SPLIT] Multi-Agent Task Breakdown (JSON)
    └── exec.md             # [PHASE:EXEC] Sisyphus Orchestrator (Delegation)
script/
├── lsp_check.js            # Node.js-based Syntax Harness
└── gatekeeper.js           # Node.js-based Log Analysis Harness
```

## 🛠 Operational Standards

- **English First**: All internal documentation, prompts, and harness logs are standardized in English.
- **Context Indexing**: The agent only reads the specific reference file for its current phase to minimize token usage.
- **Parallelism**: Independent missions are executed concurrently to maximize throughput.
- **Zero-Tolerance**: No task is marked "Accomplished" without explicit harness evidence (`✅ SUCCESS` or `🏆 GATE OPEN`).

---
*Developed for Gemini CLI with the spirit of Oh My OpenAgent.*
