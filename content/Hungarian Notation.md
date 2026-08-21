---
publish: true
created: "[[2023-07-01]]"
modified: 2026-01-10T22:44:56.302Z
published: "[[2023-07-01]]"
parent: "[[Bad Practices]]"
state:
  - evergreen
date: "[[2023-07-01]]"
relates:
  - "[[Bad Practices]]"
opposes:
  - "[[Best Practices]]"
---

> [!success] ~ What ? ~
> This is the practice of putting the type of the variable in the variable name.

```ts
const bIsValid: boolean = true;
const iSpeed: number = 1;
const sUserName: string = "Stefan";
```

# Origin

This practice originates from [[C|C]], before standard types existed.
