---
parent: "[[Obsidian - Framework]]"
state:
  - evergreen
aliases:
  - YAML Metadata
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
tags: some-tag, some-other-tag
aliases: 
	- AliasOne
state: some-status, some-other-status
cultivate: # Optional, only when one of the states is cultivate
---
~~~

# What goes there?

## Mandatory

- **state** - Provide the state of the note - [[Evergreen Notes]]
- **parent** - Provide one or more links to parents
## Optional 

- **aliases** - Optional. Good to add as many as possible and is highly encouraged. Practices are detailed in the [[Obsidian - Alias System|Alias System]]
- **cultivate** - Optional. When specific instructions are needed for what is to happen to the note. Will be displayed in [[Command & Control Center Index|C3]]. Note that this must be SPECIFICALLY for note related options.
- **research** - Optional. This is a tag saying you want to get better at something. Similar to cultivate
- **relates** - Optional. Notes that are **related and connected** to the **current one**
- **opposes** - Optional. Notes that **oppose the current note** 
- **links** - Optional. Links to the web. References can go here. 
- **tags** - Note Tags [[Obsidian - Tagging System|Tagging System]]
- **info** - used for dynamic views to provide a short overview 

# Dynamic YAML Frontmatter 

For content that will be displayed dynamically (using [[Dataview|Dataview]] queries), a specific set of information must be provided. 

1. `kind` must always be used to determine the kind of dynamic content being served
2. Optional yaml frontmatter must be added depending on the type of dynamic content

> [!note] ~ Note ~
> If is preferred that a template is created for each new dynamic content. 
