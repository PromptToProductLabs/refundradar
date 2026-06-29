# Changelog

## 0.5.0 — 2026-06-29

- Added case-type escalation playbooks for refunds, cancellations, warranties, and vendor disputes.
- Each playbook now exposes best channels, evidence documents, escalation ladder, and a human-approval stop rule.
- Included playbook data in Markdown packet and Loop JSON exports.
- Expanded Playwright smoke coverage for playbook rendering and exported playbook schema.

## 0.4.0 — 2026-06-29

- Added Loop Library-style JSON export for the active case, loop card, status, next action, stop condition, and message draft.
- Added Loop JSON import so a saved loop can repopulate the case intake and recalculate the follow-up status.
- Expanded Playwright smoke coverage for loop JSON download and import.

## 0.3.0 — 2026-06-29

- Added Markdown case-packet export for archiving or sending the loop to a human reviewer.
- Expanded Playwright smoke coverage to verify exported packet downloads.

## 0.2.0 — 2026-06-29

- Added browser-only saved case shelf using `localStorage`.
- Added load/delete controls for saved refund cases.
- Added printable case packet workflow.
- Added `.ics` calendar reminder download for the next follow-up date.
- Improved evidence checklist interactivity and status dial colors.

## 0.1.0 — 2026-06-29

- Initial RefundRadar prototype.
- Added case intake, loop status calculation, escalation timeline, evidence checklist, and message templates.
- Added polished UI, logo, and Loop Library product rationale.
