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
#lists
{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    flex: 1;
    overflow: auto hidden;
}
::slotted(task-list)
{
    overflow: hidden auto;
    min-width: var(--list-min-width);
}
`);
var COMPONENT_TAG_NAME = "task-board";
var TaskBoardElement = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot name="header"></slot><div id="lists" part="lists"><slot></slot></div><slot name="footer"></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, TaskBoardElement);
}
export {
  TaskBoardElement
};
