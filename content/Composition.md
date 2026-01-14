---
publish: true
created: "[[2023-06-13]]"
modified: 2026-01-11T21:00:52.259+02:00
published: "[[2023-06-13]]"
cssclasses: ""
parent: "[[Software Engineering Index|Software Engineering]]"
opposes: "[[Inheritance]]"
state: evergreen
date: "[[2023-06-13]]"
aliases:
---

> [!success] ~ What ? ~
> Composition is when we use other classes to build more complex classes and there is no parent/child relationship as is with [[Inheritance\|Inheritance]]. Composition represents a **has-a** relationship. ^mc7wor

# Overview

Composition allows us to [[Inheritance#Coupling To The Parent Class\|decouple]] the [[Inheritance#Massive Inheritance Chains\|massive inheritance chains]] that we've created.

Composition is a very common thing used in [[Go\|Go]], where [[Go - Struct\|structs]] are passed to other structs to use as they see fit directly instead of inheriting the parent's properties.  

If all functions in a composition are [[Pure Functions\|pure]], then the result of the composition is pure so we can derive more complex scenarios from simpler ones.

# Example Of Composition

```typescript
class Image {
	public resize(scale: int){
		// Logic
	}
	public flipHorizontal(){
		// Logic
	}
	public flipVertical(){
		// Logic
	}
}

class DrawableImage  {
	public constructor(private image: Image) {}
	public drawLine(x: number, y: number, endX: number, endY: number){
		// Logic that works with this.image
	}
	public drawPoint(x: number, y: number){
		// Logic that works with this.image
	}
}

/** These classes just present a way to store the data, while the image format is universal */
class PngImage {
	async save(image: Image){}
	async load(image: Image){}
}

class SvgImage {
	async save(image: Image){}
	async load(image: Image){}
}
```

Take a look at the alternative [[Inheritance#Example Of Inheritance Chains\|with inheritance]].

# Abstracting Through Interfaces

When working with composition, in cases where you would like to provide abstraction to a method, instead of passing a solid type we instead pass an interface. That method will know what it's working with and be able to perform operations and you will not be tied in to inheritance.

```typescript
interface ImageFile {
	save(image: Image);
	load(image: Image)
}

class ImageApp {
	private image: Image = new Image();
	public constructor(private file: ImageFile) {
		this.file.load(this.image);
	}

	public saveClicked() {
		this.file.save(this.image);
	}

	public flipClicked(horizontal: boolean){
		horizontal ? image.flipHorizontal() : image.flipVertical();
	}
}
```

[[Dependency Inversion Principle]] is at play here.

# Benefits

- We decouple the child from the parent
- Less expensive refactoring
