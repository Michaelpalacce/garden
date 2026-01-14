---
publish: true
aliases:
  - Understandability
created: "[[2023-06-30]]"
modified: 2026-01-11T20:28:51.139+02:00
published: "[[2023-06-30]]"
cssclasses: ""
parent: "[[Maintainability]]"
state:
  - evergreen
date: "[[2023-06-30]]"
---

> [!quote]+ ThePrimeagen
> **Readability is in the eye of the beholder**. 

> [!warning]+
> It's important to note that **readability is measured accurately only when there's is understanding of the language and problem**. 

# Factors

- Is the code well [[Documentation\|Documented]]?
	- Well documented code is never to be underestimated.
	- The documentation is often a starting point to understanding what a piece of code does. 
		- Often times you need to get a quick and general idea of how a component is used and the documentation is what you'd go to first.
	- Self describing/documenting code
		- [[Spaghetti Code]] is not your friend here.
		- Magic variables/constants
		- Magic methods.
- Are there [[Naming Convention\|descriptive names]]?
	- Class Names
	- Methods
	- Variables
- What is [[Cyclomatic Complexity]]?
- [[Code Decoupling]]
