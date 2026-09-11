# AGENTS.md

## Purpose
This repository is shared by multiple AI agents. The goal is to keep requirements, design decisions, implementation work, and handoffs consistent.

## Before starting any task
Read, in order:
1. `README.md`
2. `PROGRESS.md`
3. `docs/client-requirements.md`
4. `docs/decisions.md`
5. `docs/pending-questions.md`
6. the relevant task/area files

## Source of truth
- Confirmed client facts: `docs/client-requirements.md`
- Confirmed project decisions: `docs/decisions.md`
- Current project state: `PROGRESS.md`
- Unconfirmed items: `docs/pending-questions.md`
- Detailed dated history: `progress/YYYY-MM-DD.md`

## Rules
1. Do not invent client requirements.
2. Do not convert guesses into confirmed decisions.
3. If information is missing, add it to `docs/pending-questions.md`.
4. Keep raw client facts separate from proposed design ideas.
5. Do not overwrite another agent's work without understanding why it exists.
6. For implementation work, use a dedicated branch and PR when practical.
7. Keep commits focused and descriptive.
8. After meaningful work, update `PROGRESS.md` and append a dated entry under `progress/`.
9. If a decision changes, update `docs/decisions.md` and explain the reason.
10. Preserve client privacy. Do not publish personal trauma details or sensitive client material unless explicitly approved for the public website.

## Branch naming
Suggested:
- `agent/design-<task>`
- `agent/content-<task>`
- `agent/dev-<task>`
- `agent/seo-<task>`
- `agent/qa-<task>`

## Progress log format
Use this structure:

```md
### HH:MM — Agent / task
- Status: Done / In progress / Blocked
- Changed: files or areas changed
- Decision: any decision made
- Blocker: if any
- Next: recommended next action
```

## Definition of done
A task is not complete until:
- the requested output exists,
- assumptions are clearly marked,
- relevant docs are updated,
- `PROGRESS.md` reflects the new state,
- a handoff note exists when another agent needs to continue.