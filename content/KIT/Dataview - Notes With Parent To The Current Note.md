---
{"publish":true,"description":"Contains a dataview query to display a table with notes that have a parent set to the current note.","created":"[[2024-06-09]]","modified":"2026-01-09T13:58:23.968+02:00","cssclasses":""}
---

This could be potentially useful in the future if I want to display MOCs or Indices dynamically.


# Query

```
TABLE info as "Info"
WHERE parent = link(this.file.name)
```


# Query For Sub Header

```
LIST info from "" where contains(parent, [[Example#Test]])
sort file.mtime desc
```

