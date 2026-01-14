---
publish: true
created: "[[2024-03-20]]"
modified: 2026-01-10T02:20:02.480+02:00
published: "[[2024-03-20]]"
cssclasses: ""
parent: "[[Programming Index|Development]]"
relates:
  - "[[Interface]]"
  - "[[Duck Typing]]"
  - "[[Go]]"
  - "[[Typescript]]"
state:
  - evergreen
date: "[[2024-03-20]]"
---

> [!info]
> Structural Typing is when the **objects interface is determined by the methods and attributes it actually contains** rather than explicit extends. 

```ts
class PngImage {
	draw() { console.log('Drawing a PNG image'); }
	resize() { console.log('Resizing a PNG image'); }
}

class SvgImage {
	draw() { console.log('Drawing an SVG image'); }
}

interface Image {
	draw: () => void;
}

interface ResizableImage {
	resize: () => void;
}

// Interface segregation principle && Polymorphism && Structural Typing
// The client should not be forced to depend on methods it does not use
// The client should not be forced to implement methods it does not use
function drawImage(image: Image) { image.draw(); }
```
	