// task-board.ts
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`
:host
{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    --list-min-width: 300px;
}
[part="lists"]
{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(var(--list-min-width), 1fr);
    flex: 1;
    overflow: auto hidden;
}
::slotted(task-list)
{
    overflow: hidden auto;
}
`);
var COMPONENT_TAG_NAME = "task-board";
var TaskBoardElement = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot name="header"></slot><div part="lists"><slot></slot></div><slot name="footer"></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, TaskBoardElement);
}
export {
  TaskBoardElement
};
