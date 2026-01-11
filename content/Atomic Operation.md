---
{"publish":true,"aliases":["Atomic Operations","Atomicity"],"created":"[[2022-08-08]]","modified":"2026-01-11T20:29:59.171+02:00","published":"[[2022-08-08]]","cssclasses":"","parent":"[[System Design]]","state":["evergreen"],"date":"[[2022-08-08]]"}
---

> [!success] ~ What ? ~
> Atomic operations, also known as atomic instructions or atomic primitives, are **low-level operations** provided by computer hardware or programming libraries that are **guaranteed to execute indivisibly and without interference from other concurrent operations**.

# Map Of Content

- Atomicity - Atomic operations are **either fully completed or not executed at all**. There is no intermediate or partial state. 
- [[Indivisibility]] - An atomic operation is **performed as a single, indivisible step**. It cannot be interrupted by other operations.
- Visibility - **The effects** of an atomic operation are **immediately visible** to other threads or processes.
- [[Mutual Exclusion]] - Atomic operations **ensure that only one thread or process can perform the operation at a given time**. This is to prevent [[Race Condition]] and maintain [[Consistency]]. 
- [[Synchronization]] - Atomic operations serve as synchronization points, enforcing a specific order of execution and ensuring the proper sequencing of operations. 
- [[Guaranteed Execution]] - Atomic operations are designed to have **guaranteed execution**, regardless of the presence of concurrent operations. They ensure no interruptions. 
- [[Thread Safety]] - Atomic operations can be safely used in a multi-threaded environment.
- [[Low-Level Operations]] - Atomic operations often correspond to low-level hardware instructions or primitives provided by the underlying architecture or programming language.