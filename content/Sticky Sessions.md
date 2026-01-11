---
{"publish":true,"description":"Redirect to the same server when hit multiple times","created":"[[2024-09-06]]","modified":"2026-01-11T15:37:35.168+02:00","published":"[[2024-09-06]]","cssclasses":"","parent":"[[Load Balancing]]","state":["evergreen"],"date":"[[2024-09-06]]","relates":["[[Kubernetes - Canary Releases]]","[[Sticky Canaries]]","[[Canary Release]]"]}
---

> [!info]+
> Capabilities of [[Reverse Proxy\|reverse proxies]] or [[Load Balancing\|Load Balancer]]s to redirect traffic coming from a client to the same instance when hit multiple times.

This behavior can be achieved by including a header, or inspecting the origin IP among others. 

If you are using a header, then you need a [[Layer 7 Load Balancer]], while if you are relying on source IP, then you need a [[Layer 4 Load Balancer]].

Note, you need to make a decision here if you value speed or more fine gained routing. With a layer 7 LB, you can do much. 
