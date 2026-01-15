---
order: 10
title: The Changing Dev Role
description: Interviewing for senior/lead developer roles in the context of AI‑assisted software development?
slug: /work/the-changing-dev-role
image: https://live.staticflickr.com/65535/55043207718_0af207d889_b.jpg
icon: work
tags: Senior Developer, AI, Experience
---

> The core tension is this: Software development has undergone a step‑change due to AI, but many hiring conversations, job descriptions, and interview processes have not.

### What AI Has Actually Changed

AI has not primarily:

- replaced developers
- removed the need for engineering discipline
- eliminated senior roles

Instead, it has:

- collapsed the cost of _implementation_
- accelerated prototyping and exploration
- moved the bottleneck from **writing code** to **deciding what code should exist**

The scarce skill is now **judgement**, not syntax.

## Experience Matters More Than Ever

- Experience provides context on failure modes
- It informs which shortcuts are safe
- It reveals where complexity hides (data, auth, scale, ownership)
- It enables better questions to be asked of AI tools

### The AI Question Gap

Less‑experienced developers can ask:

```sh
How do I build X?
```

Experienced developers ask:

```sh
Should X exist?
What breaks if it does?
Where does this lock us in?
What has to be correct from day one?
```

AI accelerates both groups — but only one group avoids scaling mistakes.

## Why Many Current Roles Feel Wrong

Many roles still assume:

- requirements are stable
- tickets precede thinking
- velocity comes from headcount
- scale problems come later

AI invalidates these assumptions.

As a result, many roles being hired for today:

- are optimised for a world that no longer exists
- measure output instead of learning speed
- separate product and engineering too rigidly

## Whyat might be the new role?

**Technical Outcome Lead**

- Frames problems before building
- Uses AI to explore solution space rapidly
- Delivers PoCs in days, not sprints
- Knows when to stop prototyping and harden
- Protects data, security, and long‑term optionality
- Collapses handoffs between product, design, and engineering

This role is about turning uncertainty into working, robust systems quickly.

## Development Philosophy

### Order of Operations (Critical)

Screens are cheap. Data models are not.

Correct sequence:

```text
Outcome → Actors → Tasks → Data → APIs → UI
```

UI is deliberately delayed until:

- responsibilities are clear
- data flows are understood
- failure modes are considered

## Speed vs Robustness

Speed is not the enemy of quality — _uncontrolled speed is_.

A practical approach:

```text
Phase 1: Fast PoC
- validate direction
- explore solution space
- accept disposability

Phase 2: Hardening
- lock data models
- define API contracts
- secure auth boundaries
- introduce observability
```

AI compresses Phase 1 dramatically.
Judgement determines when Phase 2 begins.
