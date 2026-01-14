---
publish: true
description: Efficiently handling service degradation.
created: "[[2024-06-16]]"
modified: 2026-01-10T23:36:24.314+02:00
published: "[[2024-06-16]]"
cssclasses: ""
parent: "[[Error Resiliency]]"
state:
  - evergreen
date: "[[2024-06-16]]"
relates:
  - "[[Error Handling]]"
  - "[[Best Practices]]"
  - "[[Handling API Down Time]]"
---

> [!info]+
> Your app should be [[Robustness\|robust]] enough to **handle third party system failures** with as **minimal** as possible **side effects**.

This can mean something as **simple as returning a [[HTTP - Status Code\|status code 503]]** to as complex as returning **a cached response or some sensible default**.

> [!warning]+ Important
> No matter what is decided the **most important part** is to make sure that your **service is still accessible** and you **notify the user** that **something went wrong** and **what should their next steps be**.
