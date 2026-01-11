---
{"publish":true,"created":"[[2024-10-12]]","modified":"2026-01-11T15:45:44.688+02:00","published":"[[2024-10-12]]","cssclasses":"","parent":"[[Software Engineering Index]]","state":["tree"],"date":"[[2024-10-12]]","relates":["[[Error Resiliency]]","[[Fault Tolerance]]"],"opposes":null,"links":null,"aliases":null}
---

# Timeouts

A **system** may **trigger** a deadman's switch **if a process doesn't complete [[Timeouts\|after a certain time]]**.

# Automated Systems

In software, some automated systems may have a **health monitor** in place and may **trigger a deadman's** switch if the **system enters an unhealthy state**.

# Emergency stop

In cases where **a lot of errors** may be happening a **deadman's switch may be used** to **kill the processes** to **prevent even more errors** from happening. Similar to a [[Circuit Breaker Pattern\|Circuit Breaker]].