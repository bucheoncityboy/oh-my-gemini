---
name: omg
description: The Corporate Engine - High-Integrity State Machine Orchestration.
---

# OMG: The Corporate Engine (State Machine Engine)

This framework operates via a **Strict Sequential State Machine**. Phases are hardware-locked.

## 📌 State Transitions

1. **[STATE:INTERVIEW]**
   - **Role**: Business Analyst (BA)
   - **Restrictions**: NO Code tools.
   - **Exit Condition**: User says "Requirement Locked".
2. **[STATE:PLAN]** (LOCKED until Exit 1)
   - **Role**: Solution Architect
   - **Restrictions**: NO Implementation tools.
   - **Exit Condition**: Architecture Approved.
3. **[STATE:EXEC]** (LOCKED until Exit 2)
   - **Role**: Contractors & QA
   - **Restrictions**: Self-Healing Loop Required.

## 🛡️ CTO Enforcement Rules
- **Intent Censorship**: If a sub-agent provides a response outside its current State (e.g., BA provides code), the CTO **MUST** reject it.
- **Context Purge**: Do NOT pass technical design info to the BA.
- **Zero-Tolerance**: Violation of the "Stop-and-Wait" rule results in a sub-session wipe.

## 📜 Global Standards
- English-Only.
- Human-in-the-Loop mandatory for State 1.
