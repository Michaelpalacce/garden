---
publish: true
created: "[[2023-03-09]]"
modified: 2026-01-14T12:59:41.012Z
published: "[[2023-03-09]]"
parent: "[[Design Patterns]]"
state:
  - evergreen
links:
  - http://xunitpatterns.com/Humble%20Object.html
date: "[[2023-03-09]]"
relates:
  - "[[Testing]]"
---

# Notes

> [!success] ~ What ? ~
> The Humble Object design pattern is when you extract logic that communicates with GUI elements, os components and third party services.

![[Assets/Pasted image 20230309194511.png]]

The Humble Object then becomes almost untestable, but at the same time there is no point to test it.

Example: there is no point to test things like:

```ts
Date.now()
```

Or

```ts
api.executeRequest()
```

This way the testable component is using the humble object to execute these commands.

## Examples

- ConfigurationElementAccessors
- Api Clients
- Database Accessors
- Resource Accessors
