---
state:
  - evergreen
aliases:
  - Workbench
parent: "[[Command & Control Center Index|CCC]]"
---
> [!done] What?
> 
> This is where your workbenches stay before they are inboxed or #withered.

# Overview

A way to organize your current thoughts 💡. Whenever you want to add something new to the evergreen forest 🌲🌲🌲, you can create a new Workbench and start to link ideas together from what you have or don't have. Workbenches act as a local MOC for your current thoughts.

The MOC is generated dynamically based on the state of the page. If the state is workbench, then it will appear in the list.

An optional [[Obsidian - YAML Front Matter|YAML Front Matter]] `info` can be set which will be displayed.


# Workbenches

```dataview
TABLE info as "Info"
WHERE contains(state, "workbench") 
and !contains(path, "Templates")
```

---
Links: 