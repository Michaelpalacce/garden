---
parent: "[[Dataview]]"
tags:
  - dataview
  - example
  - snippet
  - time
  - dataviewjs
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

