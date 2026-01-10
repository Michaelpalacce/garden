---
{"publish":true,"created":"[[2023-06-17]]","modified":"2026-01-11T00:34:25.926+02:00","published":"[[2023-06-17]]","cssclasses":"","parent":"[[Documentation]]","links":"https://youtu.be/Bf7vDBBOBUA","state":["evergreen"],"date":"[[2023-06-17]]","relates":["[[Testing - Unit Tests]]","[[Best Practices]]"]}
---


What are the similarities and between documentation and [[Comments\|Comments]]? 

# Map Of Content

- [[Go - Documentation\|godoc]]

# Self Documenting Code

- Consider the code you are writing. Are you using a typed language? Do you really need to document the return type or the arguments?
- Is my function named well?

# [[Examples Are The Best Documentation]]

- Examples are what most of the documentation readers look for
- *I personally always look for the telltale signs of a code block when reading documentation*

Consider the following example:
```
max(4, 6) # → 6

max([1, 2, 3]) # → 3

max(['x', 'y', 'abc'],  key=len) # → 'abc'

max([]) # ValueError: max() arg is an empty sequence

max([], default=5) # → 5
```

# Unit Tests as documentation

![[Unit Tests As Documentation]]
