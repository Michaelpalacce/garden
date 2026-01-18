---
publish: true
aliases:
  - YAML Metadata
created: "[[2024-09-02]]"
modified: 2026-01-18T09:09:58.744+02:00
published: "[[2024-09-02]]"
cssclasses: ""
parent: "[[Framework]]"
state:
  - evergreen
date: "[[2024-09-02]]"
links:
  - https://www.youtube.com/watch?v=rAoFGGMG-0g&ab_channel=BryanJenks
  - https://help.obsidian.md/Advanced+topics/YAML+front+matter
---

# Overview

YAML front matter is metadata you put in the top of the markdown note.

It looks like:

~~~yaml
---
parent: "[[Test]]"
aliases: 
	- AliasOne
state: some-status, some-other-status
cultivate: # Optional, only when one of the states is cultivate
---
~~~

# What goes there?

## Mandatory

- **state** - Provide the state of the note - [[KIT/Evergreen Notes]]
- **parent** - Provide one or more links to parents
## Optional 

- **aliases** - Optional. Good to add as many as possible and is highly encouraged. Practices are detailed in the [[KIT/Alias System\|Alias System]]
- **cultivate** - Optional. When specific instructions are needed for what is to happen to the note. Will be displayed in [[KIT/Command & Control Center Index\|C3]]. Note that this must be SPECIFICALLY for note related options.
- **research** - Optional. This is a tag saying you want to get better at something. Similar to cultivate
- **relates** - Optional. Notes that are **related and connected** to the **current one**
- **opposes** - Optional. Notes that **oppose the current note** 
- **links** - Optional. Links to the web. References can go here. 
- **tags** - Note Tags [[KIT/Tagging System\|Tagging System]]
- **description** - used for dynamic views to provide a short overview 

# Dynamic YAML Frontmatter 

For content that will be displayed dynamically (using [[KIT/Dataview\|Dataview]] queries), a specific set of information must be provided. 

1. `kind` must always be used to determine the kind of dynamic content being served
2. Optional yaml frontmatter must be added depending on the type of dynamic content

> [!note] ~ Note ~
> If is preferred that a template is created for each new dynamic content. 

# Garden

My [[index\|Garden]] also has special metadata. 

- **publish** - Optional. This is a checkbox, that if set to true ("checked"), the note will be published to my garden with Quartz syncer. At the same time, if set to false, it will be unpublished.
- **title** - Optional. You can use this to overwrite the title of the note when it's published. 