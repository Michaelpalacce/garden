---
parent: "[[Command & Control Center Index|Command & Control Center]]"
state:
  - evergreen
relates:
  - "[[000 Nursery Index|Nursery]]"
aliases:
  - Pathways
date: "[[2023-06-15]]"
publish: true
---
> [!success] ~ What ? ~
> Each forest contains pathways that animals take. Shortcuts and well trodden paths that connect different parts of the whole. Just like the [[Neurological|neurological]] pathways in your [[Brain]]. 
> - This is where you will find these pathways and more importantly their intersections. By discovering these intersections you can decide on what you should expand on. 

# Unformed Pathways 

## Notes that have not been created yet, TOP 50

```dataviewjs
const unresolvedLinks = {};
for (let file of dv.pages()) {
    const path = file.file.path;
    if(path.includes("Work") || path.includes("Periodic")) {
       continue;
    }
    for (let link of file.file.outlinks) {
        if (link.path.includes("@")||link.path.includes("%")) {
            continue;
        }
        if (!dv.page(link.path)) {
            if (!unresolvedLinks[link.path]) {
                unresolvedLinks[link.path] = 0;
            }
            unresolvedLinks[link.path]++;
        }
    }
}

const sortedLinks = 
Object.entries(unresolvedLinks)
//.filter(([a, b]) => b > 5)
.sort((a, b) => b[1] - a[1])
.splice(0,50)
.map(([a,b])=>[dv.fileLink(a),b]);

dv.table(["Note Name", "Count"], sortedLinks);
```

# Well Formed Forest Pathways

## Notes By The Number Of Outgoing Links, TOP 50

```dataview
TABLE length(file.outlinks) as "Outgoing", length(file.inlinks) as "Incoming"
WHERE !contains(file.path,"Periodic") 
AND !contains(file.path, "Templates")
AND !contains(file.path, "textgenerator")
AND !contains(file.path, "Buttons")
AND !contains(file.path, "Assets")
AND !contains(file.path, "Work")
AND !contains(file.path, "People")
SORT length(file.outlinks) DESC
LIMIT 50
```

## Notes By The Number Of Incoming Links, TOP 50

```dataview
TABLE length(file.inlinks) as "Incoming", length(file.outlinks) as "Outgoing"
WHERE !contains(file.path,"Periodic") 
AND !contains(file.path, "Templates")
AND !contains(file.path, "textgenerator")
AND !contains(file.path, "Buttons")
AND !contains(file.path, "Assets")
AND !contains(file.path, "Work")
AND !contains(file.path, "People")
SORT length(file.inlinks) DESC
LIMIT 50
```
