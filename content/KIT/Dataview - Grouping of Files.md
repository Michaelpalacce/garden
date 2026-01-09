---
{"publish":true,"created":"[[2022-05-03]]","modified":"2026-01-09T13:58:23.889+02:00","cssclasses":""}
---

# Grouping of files

```js
function groupFunc( page ) {
	let filename = page.file.name;
	let result = filename.split( " " )[0].split("-");;

	return `${result[0]}-${result[1]}`;
}

// Sort the groups first
const groups = dv.pages('"Work/Projects/VGR/Meetings"').groupBy( groupFunc ).sort( g => g.key, "desc" );

for (let group of groups) {
	// Display a header 2 with the YYYY-MM
	dv.header( 3, `[[${group.key}]]` );
	// Sort descending by name and extract the link
	let sanitizedGroup = group.rows.sort( k => k.file.name, 'desc' ).map( k => `${k.file.link} - tags: ${k.file.tags.join( " | " )}` );
    dv.list( sanitizedGroup )
}
```
When you use the `groupBy` and provide a filter, you get the following Object:

```ts
export type Page = {
	file: {
		path: string,
		folder: string,
		name: string,
		link: string,
		outlinks: string,
		inlinks: string,
		etags: string,
		tags: string,
		aliases: string,
		tasks: string,
		ctime: string,
		cday: string,
		mtime: string,
		mday: string,
		size: string,
		ext: string,
		day: string,
		[otherMetadata: string]: string
	}
}

export type GroupedResults = {
	key: string,
	rows: Page[]
}
```
