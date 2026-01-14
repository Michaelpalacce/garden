---
publish: true
description: Construct new object instances
created: "[[2025-04-01]]"
modified: 2026-01-10T23:18:45.564+02:00
published: "[[2025-04-01]]"
cssclasses: ""
parent: "[[Programming Index]]"
state:
  - sapling
date: "[[2025-04-01]]"
opposes:
  - "[[Destructors]]"
relates:
  - "[[OOP|Object Oriented Programming]]"
---

# Best Practices

- Keep constructors simple. **Constructing an object shouldn't be an expensive operation**.
	- No API calls
	- No resources created
	- No resources modified
- [[Dependency Injection]] is your friend.
	- Use [[Interface\|interfaces]] when possible.
		- [[High Level Components Should Depend On Low Level Abstractions]]
