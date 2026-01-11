---
{"publish":true,"description":"Complexity scale","created":"[[2024-10-11]]","modified":"2026-01-11T15:41:59.044+02:00","published":"[[2024-10-11]]","cssclasses":"","parent":"[[Performance]]","state":["sapling"],"date":"[[2024-10-11]]","links":["http://bigocheatsheet.com/"],"relates":["[[Complexity]]"]}
---

The basic classes of complexity are:

- O(1): a field access, array or map lookup
    Advice: don't worry about it (but keep in mind the constant factor.)
- O(log n): binary search
    Advice: only a problem if it's in a loop
- O(n): simple loop
    Advice: you're doing this all the time
- O(n log n): divide-and-conquer, sorting
    Advice: still fairly fast
- O(nm): nested loop / quadratic
    Advice: be careful and constrain your set sizes
- Anything else between quadratic and sub-exponential
    Advice: don't run this on a million rows
- O(b ^ n), O(n!): exponential and up
    Advice: good luck if you have more than a dozen or two data points
