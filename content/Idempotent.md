---
publish: true
aliases:
  - Idempotency
created: "[[2023-07-09]]"
modified: 2026-01-11T15:31:35.464+02:00
published: "[[2023-07-09]]"
cssclasses: ""
parent: "[[Software Engineering Index]]"
state:
  - evergreen
relates:
  - "[[API]]"
  - "[[Ansible]]"
  - "[[Best Practices]]"
date: "[[2023-07-09]]"
---

> [!success] ~ What ? ~
> Idempotency is **when an operation returns the same outcome no matter for many times it's called**. 

# Designing An Idempotent Operation

In designing idempotent operations like deleting a resource, it's generally more efficient and cleaner to handle potential failure within the operation itself rather than relying on a separate check.

1. **[[Performance]]**: Performing a separate check to see if a resource exists before attempting to delete it introduces an additional API call, which can impact performance, especially in high-traffic systems.
2. **[[Concurrency]]**: In a concurrent system, the state of the resource might change between the check and the deletion, leading to potential race conditions. Handling the operation atomically reduces the risk of such issues.
	- *This seems a really good reason!*
3. **[[Error Handling]]**: By directly handling errors within the delete operation, you have more control over how to respond to different types of errors (e.g., network errors, permission errors) and can provide more informative error messages to the caller.
4. **Code [[Simplicity]]**: Handling the potential failure within the delete operation itself keeps the code cleaner and more focused. It centralizes error handling logic, making the code easier to understand and maintain.