---
publish: true
created: "[[2022-05-03]]"
modified: 2026-01-09T13:58:23.916+02:00
published: "[[2022-05-03]]"
cssclasses: ""
parent: "[[Dataview - Grouping]]"
state:
  - evergreen
date: "[[2022-05-03]]"
relates:
  - "[[Dataview - Grouping by State]]"
  - "[[Dataview - Grouping of Files]]"
opposes:
---

# Grouping with Sort

When you want to achieve grouping with some fort of sort. For more information check the [Raw Interface](https://blacksmithgu.github.io/obsidian-dataview/api/data-array/)
```js
const DATE_FORMAT = "YYYY-MM-DD dddd";

let today  = moment().format( DATE_FORMAT );

// Sort the groups first
const page = dv.page( `Journal/${today}` );
const groupedTasks = page.file.tasks.groupBy( t => t.section ).sort( t => t.key.subpath, "desc", ( a, b ) => {
	const weightMap = {
		Night: {
			weight: 10
		},
		Morning: {
			weight: 20
		},
		Noon: {
			weight: 30
		},
		Afternoon: {
			weight: 40
		},
		Evening: {
			weight: 50
		}
	};

	function getWeight( sectionName ) {
		for ( let key in weightMap ) {
			if ( sectionName.includes( key ) ) {
				return weightMap[key].weight;
			}
		}
		
		return 0;
	}

	const aWeight = getWeight( a );
	const bWeight = getWeight( b );
	
	return aWeight < bWeight;
});


for( let group of groupedTasks ) {
	dv.header( 3, group.key );
	dv.taskList( group.rows, false );	
}
```
