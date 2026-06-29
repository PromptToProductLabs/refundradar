# Product Rationale: RefundRadar

## OSS source

**Loop Library / Loopy**

- Repo: https://github.com/Forward-Future/loopy
- Catalog: https://signals.forwardfuture.com/loop-library/
- License: MIT
- X-Intel note: `/home/vinclaw/Documents/Obsidian/x-intel/Techniques/Refund Follow-Up Loops for Personal Admin Agents.md`

## Why Loop Library matters

Loop Library turns prompts into repeatable operating procedures. A good loop has a goal, check, next action, and stop condition. That makes agent work more trustworthy because it is bounded and evidence-seeking rather than open-ended.

## Product translation

RefundRadar converts the loop idea into a consumer product surface.

The workflow is not “ask AI to get my refund.” The workflow is:

1. define the refund/cancellation case,
2. check whether the vendor responded,
3. choose the next follow-up or escalation,
4. stop when refunded, formally denied, or human/legal/payment approval is needed.

## Target user

Busy consumers, freelancers, families, and small business owners who lose money because refunds, cancellations, warranty claims, and vendor disputes require repeated follow-up.

## Real-world value

RefundRadar is useful even without full browser/email automation because it gives the user:

- a visible case packet,
- next-action timing,
- copy-ready messages,
- proof checklist,
- escalation path,
- explicit stop conditions.
- a browser-only saved case shelf for multiple active refunds,
- a calendar reminder for the next follow-up,
- a printable packet for records or human escalation,
- a downloadable Markdown case packet that carries the loop card, evidence checklist, and message draft outside the browser.

## UI DNA

- **Metaphor:** personal admin command desk / refund case file.
- **Primary surface:** case tracker with loop status, timeline, and message composer.
- **Signature interaction:** edit case fields and watch next action/status recalculate.
- **Second interaction:** save a case locally, reload it, export the packet, print the packet, or download a follow-up reminder.
- **Signature component:** Loop Status Dial.
- **Visual style:** consumer-finance receipt desk, warm and trustworthy.
- **Logo:** receipt/check/radar mark.
- **Animations:** pulsing OSS badge, rising timeline steps, floating loop glow, hover actions.
- **Visual constraint:** no chatbot-first interface; the loop is visible as a practical case workflow.

## Newsletter thesis

**The first useful personal AI agents may just be stubborn follow-up loops.**

Loop Library provides the open-source concept. RefundRadar shows how that concept becomes a product people can understand immediately.
