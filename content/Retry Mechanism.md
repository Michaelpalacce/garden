---
{"publish":true,"aliases":["Retries"],"description":"Sometimes retrying am operation is the most sensible thing to do","created":"[[2024-06-16]]","modified":"2026-01-10T23:38:44.514+02:00","published":"[[2024-06-16]]","cssclasses":"","parent":"[[Error Resiliency]]","state":["evergreen"],"date":"[[2024-06-16]]","relates":["[[Error Handling]]","[[Failover]]"],"opposes":null}
---

Retrying the request can **help with resolving any errors that are due to connectivity**  or perhaps **socket timeouts**. It is important to be selective when retries should be attempted.

Retrying 4xx errors will probably not help and may end up being counter productive.

The mechanism for retries can differ.

- [[Exponential Backoff]]
- [[Fixed backoff]]
- [[Random backoff]]

# Retry Headers

Different [[REST - Header\|headers]] exist that can be used to notify us that a request has been rate limited and needs to be retried after certain conditions.

- `Retry-After`
	- If this is sent with [[HTTP - Status Code\|Status Code 429]], then this means that the request has been rate limited and you should wait until the indicated time. If sent with status code 503, it means that the service will be unavailable until the given time.
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`
