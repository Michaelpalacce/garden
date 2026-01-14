---
publish: true
created: "[[2024-09-06]]"
modified: 2026-01-11T15:38:38.712+02:00
published: "[[2024-09-06]]"
cssclasses: ""
parent: "[[System Design]]"
state:
  - sapling
date: "[[2024-09-06]]"
relates:
  - "[[Reverse Proxy]]"
opposes:
links:
  - https://www.designgurus.io/course-play/grokking-system-design-fundamentals/doc/introduction-to-api-gateway
description:
aliases:
---

# Responsibilities

- [[Caching]]
	- Responses can be cached by dedicated [[CDN]] servers that get hit
	- Responses can also be cached in memory with something like [[Valkey]]/[[Redis]]/[[Memcached]]
- [[Authentication]] and [[Authorization]]
	- The API gateway can easily handle auth by calling a [[SSO]] endpoint
- [[Rate Limiting]]
	- Rate limiting can easily be achieved by implementing a [[Leaky Bucket\|leaky bucket algorithm]] or by using other similar methods
- [[Failover]]
- [[Monitoring]]
	- Can provide metrics and logs to [[Metrics Aggregator\|metric aggregators]] and [[Log Aggregator\|log aggregators]]
- [[Load Balancing]]
	- The API gateway can serve as a Load Balancer, even tho that may not be the best way to handle things.
	- Load balancers can instead be put before or after the gateway
- [[Validation]]
	- Can be used to validate the requests or responses coming in/out
	- Can be useful to prevent errors from leaking to the outside
	- Can also lead to automatic [[Retry Mechanism\|Retries]]
- [[Circuit Breaker Pattern]]
- [[Service Discovery]]
- [[Web Application Firewall]]
