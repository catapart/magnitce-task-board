const COMPONENT_STYLESHEET = new CSSStyleSheet();
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

import '@magnit-ce/task-list';
import type { TaskListAttributes } from '@magnit-ce/task-list';
import { TaskListElement, TaskListEvents } from '@magnit-ce/task-list';
import '@magnit-ce/task-card';
import type { TaskCardProperties, TaskCardAttributes } from '@magnit-ce/task-card';
import { TaskCardElement, TaskCardEvent, TaskCardPart } from '@magnit-ce/task-card';


const COMPONENT_TAG_NAME = 'task-board';
export class TaskBoardElement extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<slot name="header"></slot><div id="lists" part="lists"><slot></slot></div><slot name="footer"></slot>`;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    }
}
if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskBoardElement);
}

export { COMPONENT_TAG_NAME as TASK_LIST_TAG_NAME, type TaskListAttributes, TaskListElement, TaskListEvents };


export { COMPONENT_TAG_NAME as TASK_CARD_TAG_NAME, type TaskCardAttributes, TaskCardElement, TaskCardEvent, TaskCardPart, type TaskCardProperties };