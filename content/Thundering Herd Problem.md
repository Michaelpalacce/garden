---
{"publish":true,"description":"Cascading failure of systems caused by overloading one server and automatic failover to other servers that, due to similar resources, cannot handle the requests either.","created":"[[2025-09-17]]","modified":"2026-01-11T15:36:21.664+02:00","published":"[[2025-09-17]]","cssclasses":"","parent":"[[Distributed Systems]]","state":["evergreen"],"date":"[[2025-09-17]]","relates":["[[Microservice]]"]}
---

> [!info]+
> **Cascading failure of systems** caused by **overloading one server** and automatic **failover to other servers** that, due to similar resources, cannot handle the requests either. 
> The same problem may happen in let's say processes.

# Mitigation

Usage of [[Rate Limiting]] techniques will eliminate such problems. Implementing a [[Leaky Bucket]] for example.
