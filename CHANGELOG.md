# Changelog

## 0.8.0 — 2026-06-29

- Added a Packet Readiness panel that scores the evidence packet and names missing proof before escalation.
- Included packet-readiness score and gaps in Markdown packet export, print/PDF packet export, and Loop JSON export.
- Expanded Playwright smoke coverage to verify readiness UI, print packet contents, and exported JSON schema.

## 0.7.0 — 2026-06-29

- Added a standalone print/PDF-ready HTML packet export for human review, archive, or save-as-PDF workflows.
- The print packet includes loop status, next action, case summary, Loop Library-style loop card, escalation route, deadline guard, evidence checklist, evidence notes, and the current message draft.
- Expanded Playwright smoke coverage to verify the print packet download and contents.

## 0.6.0 — 2026-06-29

- Added purchase/charge date and dispute-deadline fields to case intake.
- Added deadline guard logic that switches the loop to `Human approval needed` when a card/contract/policy deadline is within 3 days.
- Added vendor-route detection for airline refunds, subscription billing, warranty claims, and general vendor disputes.
- Included vendor-route and deadline-guard details in Markdown packet and Loop JSON exports.
- Expanded Playwright smoke coverage for deadline guard and vendor-route schema.

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
