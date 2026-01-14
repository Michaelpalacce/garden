---
publish: true
created: "[[2023-06-18]]"
modified: 2026-01-11T15:29:23.396+02:00
published: "[[2023-06-18]]"
cssclasses: ""
parent: "[[SOLID]]"
state: sapling
aliases:
date: "[[2023-06-18]]"
---

> [!success] ~ What ? ~
> Our modules should need to know about functionality they don't use. 

We need to split our modules into smaller abstractions, like interfaces.

# Example

```typescript
interface Flyer {
	fly();
}
interface Animal {
	speak();
}

class Bird implements Flyer, Animal {}
```

```ts
// Interface representing a document that can be opened, saved, and printed
interface Document {
    open(): void;
    save(): void;
    print(): void;
}

// Interface representing a document that can be edited
interface EditableDocument {
    edit(): void;
}

// Interface representing a document that can be shared
interface ShareableDocument {
    share(): void;
}

// Class implementing the Document interface
class TextDocument implements Document, EditableDocument, ShareableDocument {
    open(): void {
        console.log("Opening text document...");
    }

    save(): void {
        console.log("Saving text document...");
    }

    print(): void {
        console.log("Printing text document...");
    }

    edit(): void {
        console.log("Editing text document...");
    }

    share(): void {
        console.log("Sharing text document...");
    }
}

// Class implementing the Document interface
class SpreadsheetDocument implements Document, EditableDocument {
    open(): void {
        console.log("Opening spreadsheet document...");
    }

    save(): void {
        console.log("Saving spreadsheet document...");
    }

    print(): void {
        console.log("Printing spreadsheet document...");
    }

    edit(): void {
        console.log("Editing spreadsheet document...");
    }
}

// Function demonstrating usage of Document interface
function processDocument(doc: Document) {
    doc.open();
    doc.save();
    doc.print();
}

// Usage
const textDoc = new TextDocument();
const spreadsheetDoc = new SpreadsheetDocument();

processDocument(textDoc); // Open, save, and print text document
processDocument(spreadsheetDoc); // Open, save, and print spreadsheet document
```