---
{"publish":true,"aliases":"C3 CCC","created":"2023-05-21T09:26:08.764+03:00","modified":"2026-01-09T13:58:23.793+02:00","cssclasses":""}
---

> Consolidates all the tasks you have as well as a list of notes that need your attention.
> - Head over to the [[KIT/000 Nursery Index\|Nursery]] to nurture your notes further.
> - Go to the [[KIT/Workbench\|Workbench]] as well and check out work in progress. 
> - Find [[Emergance\|emerging ideas]] in the [[KIT/Neurological Pathways\|Pathways]]

---
![[Ephemeral.base]]
![[Detached.base]]

![[Cultivate.base]]

![[Research.base]]

---
```dataviewjs
const TREE_KEY = 'tree';
const SEED_KEY = 'seed';
const SAPLING_KEY = 'sapling';
const EVERGREEN_KEY = 'evergreen';
const WITHERED_KEY = 'withered';
const TEMPLATES_FOLDER = 'Templates';
const PERIODIC_FOLDER = 'Periodic';
const WORK_FOLDER = "Work"
const TREE_DAYS = -1;
const SAPLING_DAYS = -3;
const SEEDING_DAYS = -7;

function filter( page ) {
	const state = page.state || '';
	return state.includes( CULTIVATE_KEY ) ;
}

// Pages
const pages = dv.pages();
// Tasks
const periodicTasks = [];
const dailyTasks = [];
const otherTasks = [];
const workTasks = [];

// Date
const now = moment();
const nowFormatted = now.format( "YYYY-MM-DD" );

// Extract data from notes at once ( one filtering over the entire garden )
pages.forEach(( page ) => {
	if ( page.file.path.startsWith( TEMPLATES_FOLDER ) ) {
		return;
	}

	if (page.file.tasks) {
		page.file.tasks.forEach(t => {
			if (t.completed)
				return;

			 switch ( true ){
				 case t.text.includes(nowFormatted):
					 dailyTasks.push( t );
					 break;
				 case page.file.path.startsWith(PERIODIC_FOLDER):
					 if ( page.file.name === nowFormatted ) {
						 dailyTasks.push( t );
						 break;
					 }
					 periodicTasks.push( t );
					 break;
				 default:
					 if (page.file.path.startsWith(WORK_FOLDER)){ workTasks.push(t); }
					 else { otherTasks.push( t ); }
					 break;
			 }
		});
	} 
});




dv.span( "# Tasks" );
	if ( dailyTasks.length > 0 ) { 
		dv.span( "## Tasks Tagged for today" );
		dv.taskList( dailyTasks );
	}
	
	if ( workTasks.length > 0 ) { 
		dv.span( "## Work Tasks" );
		dv.taskList( workTasks );
	}
	
	if ( otherTasks.length > 0 ) { 
		dv.span( "## Other Tasks you have" );
		dv.paragraph( `Outside of [[${nowFormatted}|today's]] and work tasks, you have these!` );
		dv.taskList( otherTasks );
	}
	
	if ( periodicTasks.length > 0 ) { 
		dv.span( "## OKRs" );
		dv.paragraph( "Always push yourself to improve." );
		dv.taskList( periodicTasks );
	}
```
