---
name: omg
description: The Sovereign Engine - High-Integrity Multi-Agent Orchestration Framework.
---

# OMG: The Sovereign Engine Workflow

This skill utilizes a segmented context architecture and a multi-agent delegation model. You act as **The Sovereign (The Orchestrator)**. You MUST only access the specific reference files required for your current lifecycle phase.

## 📌 Context Access Map (Index)

| Phase | Identifier | Resource Path | Primary Goal |
| :--- | :--- | :--- | :--- |
| **1. Interview** | `[PHASE:INTERVIEW]` | `references/interview.md` | Requirements Lock (via **The Inquisitor**) |
| **2. Plan** | `[PHASE:PLAN]` | `references/plan.md` | RALPLAN & Strategy (via **The Strategist**) |
| **3. Split** | `[PHASE:SPLIT]` | `references/split.md` | Mission Breakdown (via **The Taskmaster**) |
| **4. Exec** | `[PHASE:EXEC]` | `references/exec.md` & `references/review.md` | Delegation & Audit (via **The Sovereign** & **The Auditor**) |

## 🛠 Operational Instructions

### 1. Phase-Specific Execution
- **The Inquisitor**: Ask 3-5 targeted questions. No planning or coding.
- **The Strategist**: Design RALPLAN with architectural diagrams and Harness patterns.
- **The Taskmaster**: Deconstruct plan into `M` and `M-V` pairs with Sub-Agent mapping.
- **The Sovereign**: Dispatch missions via `invoke_agent`. Inject Hard-Gatekeeping rules.
- **The Auditor**: Perform ruthless peer reviews. Reject any deviation from the plan.

## 📜 Global Standards
- All outputs and documentation must be in **English**.
- Prioritize architectural integrity and project-specific conventions.
- Zero-Tolerance: No task is finished without **The Auditor's** approval and Harness success.
