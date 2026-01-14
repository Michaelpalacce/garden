---
publish: true
aliases:
  - How To Name Components
created: "[[2023-06-30]]"
modified: 2026-01-11T00:43:32.082+02:00
published: "[[2023-06-30]]"
cssclasses: ""
parent: "[[Programming Index]]"
state:
  - evergreen
date: "[[2023-06-30]]"
---

# Single Letter Variables

They don't tell us anything about the code.

```ts
let i = "Test";
```

> [!tip]+ In [[Go]]? 
> In Go it's common practice to use single letter variables for [[Go - Value Receivers\|value]] and [[Go - Pointer Receiver\|pointer]] receivers. 

# Don't Abbreviate

Most time abbreviations lead to variables that are not easily recognizable.

They rely on context, that you in the future you, or another developer, may not have.

# Don't Put Types In The Variable Name

![[Hungarian Notation]]

# Put Units In The Variable Name

Think about the variable `timeout`. The variable fails to convey a very important piece of information and that is the unit. Is it seconds, milliseconds, nanoseconds? 

`timeout` -> `timeoutSeconds`
`remainingTime` -> `remainingTimeInMilliseconds`

# Types In Types

We shouldn't need to convey the type of a type this way. Let our [[IDE\|IDEs]] help us. Furthermore, you are working with a struct, so does it really matter if it's an interface or not? 

```ts
interface IAnimal {}

class Cat implements IAnimal {}
```

# Avoid Stating The Type Of A Class

This comes in play when you expect your class to be extended. Avoid naming classes `Base` or `Abstract`.

# Over-reliance On Managers And Services

It seems to me like the easiest thing to do when it comes to naming a class, we are not certain what to call, is sticking to calling it some sort of `Manager` or `Service`.