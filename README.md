# magnitce-task-board
A custom `HTMLElement` that provides layout and managemnt for custom [`<task-list>`](https://github.com/catapart/magnitce-task-list) elements.

Package size: ~Xkb minified, ~Ykb verbose.

## Quick Reference
```html
<script type="module" src="/path/to/task-board[.min].js"></script>
```

## Demos
https://catapart.github.io/magnitce-task-board/demo/

## Support
- Firefox
- Chrome
- Edge
- <s>Safari</s> (Has not been tested; should be supported, based on custom element support)

## Getting Started
 1. [Install/Reference the library](#referenceinstall)

### Reference/Install
#### HTML Import (not required for vanilla js/ts; alternative to import statement)
```html
<script type="module" src="/path/to/task-board[.min].js"></script>
```
#### npm
```cmd
npm install @magnit-ce/task-board
```

### Import
#### Vanilla js/ts
```js
import "/path/to/task-board[.min].js"; // if you didn't reference from a <script>, reference with an import like this

import { TaskBoardElement } from "/path/to/task-board[.min].js";
```
#### npm
```js
import "@magnit-ce/task-board"; // if you didn't reference from a <script>, reference with an import like this

import { TaskBoardElement } from "@magnit-ce/task-board";
```

---
---
---

## Overview
The `<task-board>` element is a container element for [`<task-list>`](https://github.com/catapart/magnitce-task-list) elements.

## Attributes
|Attribute|Effect|
|-|-|
|`drag-drop`|Enables drag-and-drop functionality for all of the lists.|

## Drag and Drop

### Customization
#### `[TaskListElement].TASKCARD_TAG_NAME`
The `TASKCARD_TAG_NAME` property of a `<task-list>` element determines the string that will be used to match "card" child elements. By default, this value is set to `<task-card>`, with the expectation of matching [`<task-card>`](https://github.com/catapart/magnitce-task-card) elements.  
To be clear: this is only referenced by the drag-and-drop functionality and can otherwise be ignored.

To use a custom list item, replace the `TASKCARD_TAG_NAME` with whatever the tag name is for the custom list item element.

## Events

## Slots
The `<task-board>` element allows customization by using slots to inject custom html content into its shadowRoot.

The `<task-board>` element exposes the following `slot`s: 
|Slot Name|Description|Default
|-|-|-|
|`header`|A heading for the board's collection of lists. May include a title, action buttons, etc.|[HTMLHeaderElement]|
|[Default]|Slot that holds all of the `<task-list>`s.(*note: this slot has no name; all children of the `<task-board>` element that do not specificy a `slot` attribute value will be placed in this default slot.*)|[empty]|
|`footer`|An area to include additional content or data about the board.|[empty]|

## Styling
The `<task-board>` element itself, and its `<task-list>` children, can all be styled with CSS, normally. The `<task-board>` element does not utilize the shadowDOM, so all styling can be done with standard CSS selectors. For its header and footer slots, there are no default part elements, so any elements added to the header or footer slots can be styled with standard CSS selectors, as well.

## `<task-list>` element
The `<task-board>` element is designed as a parent to the [`<task-list>`](https://github.com/catapart/magnitce-task-list) element. It's designed as a thin wrapper element that is used more for clarity in the document, rather than unique features.

`<task-list>` elements are the expected children for this library but as it is largely an abstracted layout, it will work with other child element types.


## License
This library is in the public domain. You do not need permission, nor do you need to provide attribution, in order to use, modify, reproduce, publish, or sell it or any works using it or derived from it.