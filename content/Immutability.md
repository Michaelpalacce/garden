---
{"publish":true,"aliases":["Immutability"],"created":"[[2023-06-13]]","modified":"2026-01-11T20:39:43.095+02:00","published":"[[2023-06-13]]","cssclasses":"","parent":["[[Software Engineering Index]]"],"state":["sapling"],"date":"[[2023-06-13]]"}
---

> [!success] ~ What ? ~
> Data structures are immutable. Instead of modifying a structure to change data, we create copies of the structure and apply modifications to that copy.

# Benefits

- The caller of the function does not have to worry that the function modifies its input data, so it's safe to pass the same input to multiple functions, synchronously or asynchronously, to cache it, etc
- Functions become easy to understand since, by definition, it is clear that inputs are always read-only and the only output of a function is its return value.

