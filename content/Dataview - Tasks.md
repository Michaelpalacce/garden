---
publish: true
created: "[[2022-05-11]]"
modified: 2026-01-09T13:58:23.994+02:00
published: "[[2022-05-11]]"
cssclasses: ""
parent:
  - "[[Dataview]]"
state: evergreen
date: "[[2022-05-11]]"
links:
  - https://youtu.be/ccN5vJzXwvo
---

[[Dataview]]

> [!done] What is this?
> 
> This is an example on how to create a dynamic `taskList` with the current date tasks.

```dataviewjs
dv.taskList( 
	dv.pages().file.tasks
	 .where(t=>!t.completed)
	 .where(t=>t.text.includes(moment().format( "YYYY-MM-DD" ) ) )
 );
```
