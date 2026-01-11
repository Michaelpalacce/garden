---
{"publish":true,"description":"Coding best practices to follow.","created":"[[2024-10-07]]","modified":"2026-01-11T15:40:05.776+02:00","published":"[[2024-10-07]]","cssclasses":"","parent":"[[Software Engineering Index]]","state":["evergreen"],"date":"[[2024-10-07]]","opposes":["[[Bad Practices]]","[[Bad Code]]"]}
---

# Map Of Content

- [[Good Code]] - this is a combination of a few topics
- [[Writing A Good Library]] - what to look for in a reusable library intended for external use 
- [[NASA power of ten]] - are general guidelines for wiring safe and performant code for mission critical components 
- [[How To Prevent Bugs]]
- Principles
	- [[Fail Fast Principle]] - fast failure for efficient error handling, if an error state is detected, exit immediately
- Structuring
	- [[Interface Vs Implementation Simplicity]] - for producing code that is efficient
	- [[Layering]] - for better structured components that can easily be used and [[Extensibility\|extended]]
	- [[Write Code That Is Easy To Delete, Not Extend]]
- Coding
	- [[Error Handling - Best Practices]]
	- [[Logging - Best Practices]]
	- [[Documentation - Best Practices]]
	- [[Comments - Best Practices]]

# Store secrets in a secret manager 

Use secret managers or stores for all your secrets. ^[https://www.nodejs-security.com/blog/do-not-use-secrets-in-environment-variables-and-here-is-how-to-do-it-better]

Downsides of storing them in environment:
- Easily leaked 
- Shared between processes 
- Poorly maneged
- Not version controlled
- Leaked from logs 
- Built into docker images
