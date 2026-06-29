# Introducing RefundRadar: a follow-up system for getting your money back

Refunds are easy to start and hard to finish.

You contact the airline, store, SaaS company, warranty desk, or vendor.  
They say they’ll get back to you.  
A few days pass.  
The receipt is somewhere in your inbox.  
The chat transcript is in another tab.  
You forget the promised date.  
The case quietly dies.

That is the problem **RefundRadar** is built for.

RefundRadar is a simple product idea: turn every refund, cancellation, warranty, or vendor-dispute case into a follow-up loop.

It tells you:

- what the case is worth,
- what proof to keep,
- when to follow up,
- when to escalate,
- what message to send next,
- and when the loop should stop.

The promise is not “AI will fight the company for you.”

The promise is more practical:

> Keep the case alive until you either get your money back, receive a clear decision, or reach the point where a human escalation is needed.

## Who this is for

RefundRadar is for people who do not want another complicated finance app.

It is for:

- busy consumers chasing refunds,
- freelancers disputing vendor charges,
- families managing warranty claims,
- small business owners tracking cancellations and reimbursements,
- anyone who has ever lost money because follow-up was annoying.

The first version focuses on one case at a time.

You enter the vendor, amount, case type, current status, last contact date, promised response date, and evidence notes.

RefundRadar turns that into a clear case packet.

## The workflow

A RefundRadar case has four parts.

### 1. Case intake

You capture the basic facts:

- vendor,
- amount,
- refund/cancellation/warranty type,
- current status,
- last contact date,
- promised response date,
- evidence notes.

### 2. Loop status

RefundRadar calculates whether the case is:

- waiting,
- follow-up due,
- escalation due,
- resolved.

This is the product’s core value. It removes the mental tracking.

### 3. Message composer

The product generates copy-ready messages:

- polite follow-up,
- firm escalation,
- final notice.

The messages are intentionally factual and calm. They help the user move the case forward without rewriting the same email from scratch.

### 4. Evidence checklist

RefundRadar reminds the user what proof to keep:

- receipt or invoice,
- refund policy,
- chat/email transcript,
- promise date,
- case number,
- payment method or chargeback deadline.

This makes the case easier to escalate later if needed.

## Where the open-source project comes in

The product was inspired by **Loop Library / Loopy**, an open-source project from Forward Future.

GitHub: https://github.com/Forward-Future/loopy  
Catalog: https://signals.forwardfuture.com/loop-library/

Loop Library’s useful idea is that agents should not just respond once.

They should run bounded loops.

A good loop has:

1. a goal,
2. a check,
3. a next action,
4. a stop condition.

That structure is exactly what refund follow-up needs.

Goal: recover the refund.  
Check: did the vendor respond or pay?  
Next action: wait, follow up, or escalate.  
Stop condition: refund received, formal denial, or human decision needed.

RefundRadar is a product built from that open-source idea.

## The prototype use case

For the prototype, I built a browser-based RefundRadar case for a cancelled flight refund.

The sample case:

- vendor: Northstar Air,
- amount: $486,
- status: waiting,
- promised refund response date has passed,
- evidence includes receipt, booking email, cancellation notice, and chat transcript.

RefundRadar marks the case as **follow-up due**, shows the next action, builds an escalation timeline, and generates a polite follow-up message.

This is a small use case, but it demonstrates the product direction:

> Instead of asking AI to do everything, package a messy personal-admin task into a clear loop that keeps moving until it reaches a stop condition.

## Why this matters

I like this product direction because it is useful without needing a magical agent.

Even as a simple web app, RefundRadar helps someone remember what to do next.

Later, the same product could expand into:

- saved cases,
- calendar reminders,
- Gmail/Outlook draft generation,
- PDF case packets,
- vendor-specific escalation playbooks,
- browser-agent follow-up runs with human approval.

But the core product is already understandable:

**A follow-up system for getting your money back.**

That is the kind of product pattern I want to explore more: useful open-source ideas turned into practical tools normal people can understand.

## Try it

- Product prototype: https://github.com/PromptToProductLabs/refundradar
- Live demo: https://dusty-hearth-jqg4.here.now/
- OSS source: https://github.com/Forward-Future/loopy
- Screenshots: `docs/screenshots/`

This is part of my **From Prompt to Product** experiment: finding useful open-source projects, explaining the product opportunity, and building small prototypes that show one practical use case.
