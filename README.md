# magnitce-task-board
A custom `HTMLElement` that provides layout and managemnt for custom [`<task-list>`](https://github.com/catapart/magnitce-task-list) elements.

Package size: ~1kb minified, ~1kb verbose.

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

## Parts
The `<task-board>` element only has one part in its shadowRoot and its name is `lists`. The `lists` part contains the default `<slot>`, so all of the [`<task-list>`](https://github.com/catapart/magnitce-task-list) elements will be rendered inside of the `lists` part.

## Drag and Drop
Drag and drop functionality can be activated by using each of the [`<task-list>`](https://github.com/catapart/magnitce-task-list) elements' `drag-drop` attribute.

To scope the tasks in a `<task-board>` element's lists to the board, use the [`<task-list>`](https://github.com/catapart/magnitce-task-list) element's `dragAndDropQueryParent` or `parentScopeSelector` properties.

## Events
The `<task-board>` element does not dispatch any events, itself. It can, however, be targeted for listening for any of the [`<task-list>`](https://github.com/catapart/magnitce-task-list) or [`<task-card>`](https://github.com/catapart/magnitce-task-card) elements' events. Because each of those elements dispatch events that bubble, any of their events can be listened for on the `<task-board>` element.

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