---
{"publish":true,"description":"NASA Rules for developing safely critical code","created":"[[2025-02-17]]","modified":"2026-01-10T02:22:43.656+02:00","published":"[[2025-02-17]]","cssclasses":"","parent":"[[Best Practices]]","state":["evergreen"],"date":"[[2025-02-17]]","relates":["[[Tiger Style]]","[[Safety]]"]}
---

# Rules

## Simple and explicit control flow

Do not use recursion to ensure that all executions that should be bounded are bounded. Use only a minimum of excellent abstractions but only if they make the best sense of the domain. Abstractions are never zero cost. Every abstraction introduces the risk of a leaky abstraction.

## Put a limit on everything

In reality, this is what we expect—everything has a limit. For example, all loops and all queues must have a fixed upper bound to prevent infinite loops or tail latency spikes. This follows the [[Fail Fast Principle]] so that violations are detected sooner rather than later. Where a loop cannot terminate (e.g. an event loop), this must be asserted.

## Use explicitly-sized types

`u32` for everything, avoid architecture-specific `usize`.

## Assertions detect programmer errors

Unlike operating errors, which are expected and which must be handled, assertion failures are unexpected. The only correct way to handle corrupt code is to crash. Assertions downgrade catastrophic correctness bugs into liveness bugs. Assertions are a force multiplier for discovering bugs by fuzzing.

- Assert all function arguments and return values, pre/postconditions and invariants. A function must not operate blindly on data it has not checked. The purpose of a function is to increase the probability that a program is correct. Assertions within a function are part of how functions serve this purpose. The assertion density of the code must average a minimum of two assertions per function. 
- Pair assertions. For every property you want to enforce, try to find at least two different code paths where an assertion can be added. For example, assert validity of data right before writing it to disk, and also immediately after reading from disk.
- Split compound assertions: prefer assert(a); assert(b); over assert(a and b);. The former is simpler to read, and provides more precise information if the condition fails.

## All memory must be statically allocated at startup

No memory may be dynamically allocated (or freed and reallocated) after initialization. This avoids unpredictable behavior that can significantly affect performance, and avoids use-after-free. As a second-order effect, it is our experience that this also makes for more efficient, simpler designs that are more performant and easier to maintain and reason about, compared to designs that do not consider all possible memory usage patterns upfront as part of the design.

## Declare variables at the smallest possible scope, and minimize the number of variables in scope, to reduce the probability that variables are misused

## Restrict the length of function bodies

Reduce the probability of poorly structured code. We enforce a hard limit of 70 lines per function.

Splitting code into functions requires taste. There are many ways to cut a wall of code into chunks of 70 lines, but only a few splits will feel right. Some rules of thumb:

Good function shape is often the inverse of an hourglass: a few parameters, a simple return type, and a lot of meaty logic between the braces.
Centralize control flow. When splitting a large function, try to keep all switch/if statements in the "parent" function, and move non-branchy logic fragments to helper functions. Divide responsibility. All control flow should be handled by one function, the rest shouldn't care about control flow at all. In other words, "push ifs up and fors down".
Similarly, centralize state manipulation. Let the parent function keep all relevant state in local variables, and use helpers to compute what needs to change, rather than applying the change directly. Keep leaf functions pure.

## Appreciate, from day one, all compiler warnings at the compiler's strictest setting.

## Whenever your program has to interact with external entities, don't do things directly in reaction to external events

Instead, your program should run at its own pace. Not only does this make your program safer by keeping the control flow of your program under your control, it also improves performance for the same reason (you get to batch, instead of context switching on every event). Additionally, this makes it easier to maintain bounds on work done per time period.

