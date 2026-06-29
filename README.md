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

## Demo

Live preview: https://dusty-hearth-jqg4.here.now/  
Anonymous here.now demo expires 2026-06-30 unless claimed.

## Run locally

Open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

No backend, API key, database, or account required.

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
