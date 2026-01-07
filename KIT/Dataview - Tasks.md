---
tags: dataviewjs, task
state: evergreen
aliases:
- 
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

---
Date: [[2022-05-11]]
Links: 
- [Reference + Idea](https://youtu.be/ccN5vJzXwvo) 
