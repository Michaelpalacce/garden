---
publish: true
description: Exponentially increase the time between each retry.
created: "[[2024-06-16]]"
modified: 2026-01-10T23:39:12.726+02:00
published: "[[2024-06-16]]"
cssclasses: ""
parent: "[[Retry Mechanism]]"
state:
  - evergreen
date: "[[2024-06-16]]"
relates:
  - "[[Random backoff]]"
  - "[[Fixed backoff]]"
---

> [!info]+
> Exponential backoff is when the **time waited** between each retry gets **exponentially bigger** and bigger.

*This is probably one of the better ways to do retries and is really great for things like reminders for a payment or dealing with limited resources.*

Payment processors utilise exponential backoff for purchase retries.

# Example

Here is an example how you can calculate a longer retry delay with each retry attempt.

```ts
function exponentialBackoff(retryCount: number, maxRetries: number): number {
	const retryDelay = Math.pow(2, retryCount) * 1000;
	return Math.min(retryDelay, maxRetries);
}
```

