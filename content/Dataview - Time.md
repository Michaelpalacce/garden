---
publish: true
created: "[[2024-06-02]]"
modified: 2026-01-29T07:01:01.377Z
published: "[[2024-06-02]]"
parent: "[[Dataview]]"
state: evergreen
aliases:
date: "[[2024-06-02]]"
relates:
  - "[[Moment.JS Formatting]]"
---

Dataview supports [[Moment.JS]] **natively**. This allows us to **format time** as we see fit.

# Working with time

```dataviewjs
const DATE_FORMAT = "YYYY-MM-DD dddd";

let tomorrow  = moment().add(1, 'days').format( DATE_FORMAT );
let yesterday = moment().subtract(1, 'days').startOf('day').format( DATE_FORMAT );

dv.span( `<< [[${yesterday}]] | [[${tomorrow}]] >>` )
```
