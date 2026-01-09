---
{"publish":true,"created":"[[2022-05-03]]","modified":"2026-01-09T13:58:23.849+02:00","published":"[[2022-05-03]]","cssclasses":"","parent":"[[Dataview - Grouping]]","state":["evergreen"],"date":"[[2022-05-03]]"}
---

Notes can be grouped by their state

```js
function filter( page ) {
	const state = page.state || '';
	return state.includes( 'cultivate' );
}

// Sort the groups first
const pages = dv.pages().filter( filter ).sort( k => k.file.name, 'desc' );
// Sort descending by name and extract the link
let sanitizedGroup = pages.map( k => `${k.file.link} - ${k.file.tags.join( " | " )}` );

dv.list( sanitizedGroup )
```
