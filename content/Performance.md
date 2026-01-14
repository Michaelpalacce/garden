---
publish: true
description: How to write performant code
created: "[[2024-10-10]]"
modified: 2026-01-11T15:41:48.308+02:00
published: "[[2024-10-10]]"
cssclasses: ""
parent: "[[Software Engineering Index]]"
state:
  - evergreen
date: "[[2024-10-10]]"
relates:
  - "[[Go - Performance]]"
  - "[[Complexity]]"
  - "[[Optimization]]"
links:
  - https://github.com/dgryski/go-perfbook/blob/master/performance.md#writing-and-optimizing-go-code
---

# Map Of Content

- [[Space-time Tradeoff]]
- [[Big O Notation]]
- [[Garbage Collection]]
- [[Stack]]
- [[Heap]]
- Mechanisms For Caching
	- [[Cache]]
	- [[Bloom Filter]]

# When and what to optimise

Every piece of optimisation comes with downsides. Cognitive load, [[Cyclomatic Complexity\|code complexity]], development time are some of these downsides. 

Consider if the piece of code you are trying to optimise is really worth it.

## Low-hanging fruits

Inspect your specific use case and go for the [[Low Hanging Fruits]] first. The big optimisations are more effective than the little ones.

# The Three Optimization Questions:

- Do we have to do this at all? The fastest code is the code that's never run.
- If yes, is this the best algorithm.
- If yes, is this the best _implementation_ of this algorithm.

# Data Changes

These sorts of changes are useful when the data you need is cheap to store and easy to keep up-to-date.

- Extra fields
	- You can for example store the value of length of a linked list instead of getting it every time.
- Extra Search Indexes
	- For queries, you may want to have not only a primary key but a secondary key to index the data by it if searching is needed
- Extra information about elements
	- Keeping a [[Bloom Filter]] can let you quickly return a no-match for lookups.
- Add [[Caching]] if queries are expensive.

These are all clear examples of "do less work" at the data structure level. They all cost space. Most of the time if you're optimizing for CPU, your program will use more memory. This is the classic [[Space-time Tradeoff]].

# Algorithmic Changes

The biggest improvement is likely to come from an algorithmic change. This is the equivalent of replacing bubble sort (`O(n^2)`) with quicksort (`O(n log n)`) or replacing a linear scan through an array (`O(n)`) with a binary search (`O(log n)`) or a map lookup (`O(1)`).

This is how software becomes slow. Structures originally designed for one use is repurposed for something it wasn't designed for. This happens gradually.

It's important to have an intuitive grasp of the different big-O levels. Choose the right data structure for your problem. You don't have to always shave cycles, but this just prevents dumb performance issues that might not be noticed until much later.

- ![[Big O Notation]]
# Garbage Collection

- ![[Garbage Collection]]
