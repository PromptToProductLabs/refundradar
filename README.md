# RefundRadar

Turn refund, cancellation, warranty, and vendor-dispute cases into practical follow-up loops.

RefundRadar is a polished browser prototype inspired by [Forward Future's Loop Library / Loopy](https://github.com/Forward-Future/loopy). It translates the OSS idea of bounded agent loops into a real consumer workflow: getting your money back.

## Why this exists

Loop Library argues that useful agents should not just answer once. They should run bounded loops:

1. define the goal,
2. check progress,
3. choose the next action,
4. stop or ask for help.

RefundRadar applies that pattern to personal admin work where persistence matters more than intelligence.

## What it does

Users enter a refund/cancellation/warranty case:

- vendor
- amount
- case type
- current status
- last contact date
- promised response date
- evidence notes

RefundRadar calculates:

- current loop status: waiting, follow-up due, escalate, resolved
- next action
- escalation timeline
- evidence checklist
- copy-ready message templates
- stop condition
- browser-only saved case shelf with `localStorage`
- printable case packet
- downloadable Markdown case packet for sharing or archiving
- standalone print/PDF-ready HTML case packet with the loop card, escalation route, evidence list, and message draft
- Loop Library-style JSON import/export for moving a case between RefundRadar, another tool, or an agent workflow
- vendor-type escalation playbooks that suggest channels, documents, escalation ladders, and human-approval stop rules for refunds, cancellations, warranties, and vendor disputes
- vendor-route detection for airline, subscription, warranty, and general disputes
- deadline guard that stops the loop for human approval when a card/contract dispute deadline is near
- packet-readiness scoring that flags missing proof before the user escalates
- `.ics` calendar reminder for the next follow-up

## Demo

Live preview: https://sunny-knoll-2skn.here.now/  
Anonymous here.now demo expires 2026-07-01T00:07:20.913Z unless claimed.

## Run locally

Open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

No backend, API key, database, or account required. Saved cases stay in the user's browser storage.

## Screenshots

See `docs/screenshots/`.

## Source inspiration

- Loop Library / Loopy repo: https://github.com/Forward-Future/loopy
- Loop Library catalog: https://signals.forwardfuture.com/loop-library/
- Refund follow-up loop signal: https://x.com/MatthewBerman/status/2068830105489821960

## Newsletter

See `docs/newsletter.md`.

## License

MIT
