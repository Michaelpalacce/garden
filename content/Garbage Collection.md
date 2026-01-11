---
{"publish":true,"aliases":[null],"created":"[[2024-10-11]]","modified":"2026-01-11T15:42:08.948+02:00","published":"[[2024-10-11]]","cssclasses":"","parent":"[[Performance]]","state":["sapling"],"date":"[[2024-10-11]]","relates":null,"opposes":null,"links":null,"description":null}
---

# Map Of Content

# Notes

You pay for memory allocation more than once. The first is obviously when you allocate it. But you also pay every time the garbage collection runs.

> Reduce/Reuse/Recycle. -- @bboreham

- Stack vs. heap allocations
- What causes heap allocations?
- Understanding [[Escape Analysis]] (and the current limitation)
- /debug/pprof/heap , and -base
- API design to limit allocations:
    - allow passing in buffers so caller can reuse rather than forcing an allocation
    - you can even modify a slice in place carefully while you scan over it
    - passing in a struct could allow caller to stack allocate it
- reducing pointers to reduce gc scan times
    - pointer-free slices
    - maps with both pointer-free keys and values
- GOGC
- buffer reuse (sync.Pool vs or custom via go-slab, etc)
- slicing vs. offset: pointer writes while GC is running need writebarrier: [https://github.com/golang/go/commit/b85433975aedc2be2971093b6bbb0a7dc264c8fd](https://github.com/golang/go/commit/b85433975aedc2be2971093b6bbb0a7dc264c8fd)
    - no writebarrier if writing to stack [https://github.com/golang/go/commit/2140975ebde164ea1eaa70fc72775c03567f2bc9](https://github.com/golang/go/commit/2140975ebde164ea1eaa70fc72775c03567f2bc9)
- use error variables instead of errors.New() / fmt.Errorf() at call site (performance or style? interface requires pointer, so it escapes to heap anyway)
- use structured errors to reduce allocation (pass struct value), create string at error printing time
- size classes
- beware pinning larger allocation with smaller substrings or slices
