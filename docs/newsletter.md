# Loop Engineering + Loop Library: the next skill for building useful AI products

Most people still think the hard part of using AI is writing a better prompt.

I think that is becoming less true.

The bigger opportunity is learning how to design **loops**.

A prompt asks AI to do something once.

A loop tells the system how to keep moving:

- what the goal is,
- how to check progress,
- what to do next,
- when to stop,
- and when to hand control back to a human.

That is the idea I want to call **Loop Engineering**.

It is less flashy than prompt engineering, but it may be more useful for real products.

## The open-source project: Loop Library

The project that made this click for me is **Loop Library / Loopy** from Forward Future.

- GitHub: https://github.com/Forward-Future/loopy
- Catalog: https://signals.forwardfuture.com/loop-library/

Loop Library is an open-source catalog of practical agent loops.

It is built around a simple but powerful idea:

> Most AI tasks should not be one-shot requests. They should be bounded workflows with checks, next actions, and stop conditions.

That matters because open-ended agent instructions are risky.

“Keep improving this.”  
“Handle this case.”  
“Follow up until it is done.”  
“Fix whatever is broken.”

Those sound useful, but they are vague.

A loop makes the work safer and more repeatable.

It defines what success looks like, how progress is measured, and when the system should stop instead of pretending it knows what to do.

## Why Loop Engineering matters

I see Loop Engineering as a product-building skill.

Prompt engineering is about getting a good response.

Loop engineering is about designing a repeatable process.

That difference matters when you move from demos to products.

A good AI product usually needs more than one answer. It needs a workflow:

- check the latest state,
- decide the next action,
- generate the right output,
- verify the result,
- repeat if needed,
- stop at the right time.

This applies to many everyday problems:

- chasing refunds,
- following up on sales leads,
- managing job applications,
- keeping documentation current,
- improving a website,
- checking invoices,
- tracking customer issues,
- preparing weekly reports.

The AI does not need to be magical.

The loop needs to be well designed.

## The product idea: RefundRadar

To make the concept concrete, I built a small product prototype called **RefundRadar**.

RefundRadar is a follow-up system for getting your money back.

It is for refunds, cancellations, warranty claims, and vendor disputes — the boring personal-admin tasks people often start but do not finish.

The product idea is simple:

> Turn every refund case into a loop that tells you what to send, when to send it, what proof to keep, and when to escalate.

This is not meant to be a full autonomous agent yet.

It is a practical product surface for a loop.

## The prototype use case

For the prototype, I used one concrete case: a cancelled flight refund.

The user enters:

- vendor,
- amount,
- case type,
- current status,
- last contact date,
- promised response date,
- evidence notes.

RefundRadar calculates the loop status:

- waiting,
- follow-up due,
- escalate,
- resolved.

Then it generates:

- the next action,
- an escalation timeline,
- copy-ready follow-up messages,
- an evidence checklist,
- a stop condition,
- a downloadable case packet the user can archive or send to a human reviewer,
- and a Loop Library-style JSON file that can be exported, imported, or handed to a future agent workflow.

The prototype is only one use case.

The product is bigger: a loop-based personal admin tool for cases that require persistence.

## The Loop Engineering pattern

The useful pattern looks like this:

### 1. Goal

Recover the refund or get a clear decision.

### 2. Check

Did the vendor respond, pay, deny, or miss the promised date?

### 3. Next action

Wait, follow up politely, escalate firmly, or prepare a final notice.

### 4. Stop condition

Stop when the refund is received, the vendor gives a formal denial, or the next step requires human judgment.

That structure is what makes the product useful.

Without the loop, a refund case is just a messy inbox thread.

With the loop, it becomes a workflow.

## Why I think this is valuable

The first generation of AI products was about better answers.

The next generation may be about better loops.

Products that win will not just say:

> “Ask AI anything.”

They will say:

> “Here is the repeated workflow we help you finish.”

Loop Library is interesting because it gives builders a way to think about those workflows.

RefundRadar is my first small test of that idea.

It shows how an open-source agent-loop concept can become a practical product for a normal user.

## Try it

- Loop Library / Loopy: https://github.com/Forward-Future/loopy
- Loop catalog: https://signals.forwardfuture.com/loop-library/
- RefundRadar prototype: https://github.com/PromptToProductLabs/refundradar
- Live demo: https://cosmic-linden-zvdr.here.now/
- Screenshots: `docs/screenshots/`

This is the type of open-source project I want to highlight in **From Prompt to Product**:

A useful OSS idea, a clear product concept, and a small prototype that shows one real-world use case.
