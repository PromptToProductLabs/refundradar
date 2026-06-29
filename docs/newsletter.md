# The first useful personal AI agents may just be stubborn follow-up loops

Most AI agent demos are built around one big promise:

“Tell the agent what you want, and it will go do it.”

That sounds impressive.

But in real life, a lot of useful work does not happen in one shot.

It happens through follow-up.

You ask for a refund.  
The company says they’ll get back to you.  
You wait.  
You forget.  
The case dies.

That is why I found **Loop Library / Loopy** interesting.

It is an open-source project from Forward Future that collects practical AI-agent loops and provides a way to discover, adapt, and run repeatable agent workflows.

GitHub: https://github.com/Forward-Future/loopy  
Catalog: https://signals.forwardfuture.com/loop-library/

## What is a loop?

A normal prompt asks an agent to do something once.

A loop gives the agent a repeatable workflow:

1. What is the goal?
2. How do we check progress?
3. What should happen next?
4. When should the loop stop or ask a human?

That fourth question is important.

Good loops are not “let the agent run forever.”

Good loops are bounded. They have checks, stop conditions, and handoff points.

That makes them useful for messy real-world workflows where persistence matters more than brilliance.

## The use case that clicked for me

One Loop Library example is a refund follow-up loop.

That sounds small, but it is exactly the kind of personal-admin problem people actually have.

Refunds, cancellations, warranty claims, insurance paperwork, and vendor disputes all have the same shape:

- you start the case
- someone promises a response
- the deadline passes
- you need to follow up
- sometimes you need to escalate
- eventually you stop because the case is resolved or a human decision is needed

This is not a glamorous AI use case.

That is why it is useful.

## The prototype I built

I built a small prototype called **RefundRadar**.

RefundRadar turns one refund, cancellation, or warranty case into a follow-up loop.

The user enters:

- vendor
- amount
- case type
- current status
- last contact date
- promised response date
- evidence notes

RefundRadar returns:

- current loop status
- next action
- escalation timeline
- evidence checklist
- copy-ready follow-up messages
- stop condition
- a saved case shelf in the browser
- a printable case packet
- a calendar reminder for the next follow-up

The goal is not to fully automate the refund.

The goal is to keep the case alive and make the next step obvious, without pretending the software should send legal or financial messages without human approval.

## Why this matters

I think this is a better mental model for useful agents.

Instead of asking:

> “Can AI do this whole task for me?”

Ask:

> “Can AI help me keep this loop moving until it reaches a clear stop condition?”

That applies to more than refunds:

- job applications
- insurance claims
- sales follow-ups
- client approvals
- overdue invoices
- appointment scheduling
- subscription cancellations

The product opportunity is not just smarter chat.

It is packaged persistence.

## What builders can learn

Loop Library is valuable because it turns vague agent work into a reusable structure.

A good agent product should make these visible:

- the goal
- the check
- the next action
- the stop condition

RefundRadar is a simple example, but the pattern is much bigger.

The first wave of useful personal agents may not look like autonomous employees.

They may look like stubborn little systems that remember what we forget and keep boring cases moving.

## Try it

- OSS project: https://github.com/Forward-Future/loopy
- Prototype: https://github.com/PromptToProductLabs/refundradar
- Demo: https://dusty-hearth-jqg4.here.now/
- Screenshots: `docs/screenshots/`

This is the new direction I want to explore with **From Prompt to Product**:

Find helpful open-source projects, explain the idea clearly, then build a real product prototype from it.
