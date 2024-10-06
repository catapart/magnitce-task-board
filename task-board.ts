// import '../task-list/task-list.component';
// import '../task-card/task-card.component';
// import { COMPONENT_TAG_NAME as TASKLIST_TAG_NAME, TaskListComponent } from '../task-list/task-list.component';
// import { TaskCardComponent } from '../task-card/task-card.component';

export enum TaskBoardEvent
{
    Change = 'change',
    ListCollapse = 'listcollapse',
    ListChange = 'listchange',
    ListAdd = 'listadd',
    ListRemove = 'listremove',
    ListMove = 'listmove',
    TaskAdd = 'taskadd',
    TaskRemove = 'taskremove',
    TaskChange = 'taskchange',
    TaskMove = 'taskmove',
}


const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`
:host
{
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
}
[part="lists"]
{
    display: grid;
    grid-auto-flow: column;
    flex: 1;
    overflow: hidden;
}
::slotted(task-list)
{
    overflow: hidden auto;
}
`);


const COMPONENT_TAG_NAME = 'task-board';
export class TaskBoardElement extends HTMLElement
{
    static observedAttributes = [];
    handledItems: WeakSet<Element> = new WeakSet();

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<slot name="header"></slot><div part="lists"><slot></slot></div><slot name="footer"></slot>`;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        
        this.shadowRoot!.querySelector('slot:not([name])')!.addEventListener('slotchange', (event) =>
        {
            // const children = (event.target as HTMLSlotElement).assignedElements();
            // for(let i = 0; i < children.length; i++)
            // {
            //     if(this.handledItems.has(children[i]) || children[i].tagName.toLowerCase() != TASKLIST_TAG_NAME.toLowerCase())
            //     {
            //         continue;
            //     }

            //     const taskList = children[i] as TaskListComponent;
            //     this.initializeList(taskList);
                
            // }
        });
        
    }

    // initializeList(taskList: TaskListComponent)
    // {
    //     // event fires whenever a draggable item is over the tasklist
    //     // multiple times per second, if mouse is dragging
    //     taskList.addEventListener('dragover', (event: DragEvent) =>
    //     {
    //         // default behavior is to disallow dragging; prevent that
    //         event.preventDefault();
    //         // don't let nested components both try to handle the drag
    //         event.stopPropagation();

    //         // define what kinds of effects are allowed for this drag
    //         event.dataTransfer!.effectAllowed = "move";

    //         // get a reference to the card being dragged
    //         const target = this.querySelector('task-card[data-drag-id]')!;

    //         // get the next element in the list, if there 
    //         // are any, based on the mouse position;
    //         const tasks = [...taskList.querySelectorAll('task-card:not([data-drag-id])')];
    //         const nextElement = tasks.reduce((closest: { offset: number, task?: Element }, task) =>
    //         {
    //             const boundingRect = task.getBoundingClientRect();
    //             const offset = event.clientY - boundingRect.top - (boundingRect.height / 2);
    //             if(offset < 0 && offset > closest.offset)
    //             {
    //                 return { offset, task };
    //             }
    //             return closest;
    //         }, { offset: Number.NEGATIVE_INFINITY }).task;

    //         // prevent unecessary re-renders; this can kill perf, if you don't guard here;
    //         // re-rendering by appending or inserting on every mouse-move is heavy;
    //         if(target.parentElement == taskList && nextElement == target.nextElementSibling){ return; }


    //         // if there is no next element, or the list is collapsed, add the task
    //         // to the end of the list
    //         if(nextElement == null || taskList.getAttribute('collapsed') != null)
    //         {
    //             taskList.append(target);
    //         }
    //         else
    //         {
    //             // console.log(nextElement);
    //             // otherwise, insert the task before the next task in the list
    //             nextElement.parentElement!.insertBefore(target, nextElement);
    //         }
    //     });
    //     taskList.addEventListener('drop', (event) =>
    //     {
    //         // if you don't prevent default
    //         // you can end up "dropping" into an
    //         // input element, which causes unwanted
    //         // side effects, based on the drag data
    //         event.preventDefault();
    //         event.stopPropagation();
    //         return false;
    //     });
    //     taskList.addEventListener('nested', (event: Event|CustomEvent) =>
    //     {
    //         const { detail } = event as CustomEvent; 
    //         this.initializeList(detail.target as TaskListComponent);
    //     });
    //     let appendingTaskCard: TaskCardComponent|undefined;
    //     taskList.addEventListener('add', (event: Event|CustomEvent) =>
    //     {
    //         event.stopPropagation();
    //         event.preventDefault();

    //         const customEvent = (event as CustomEvent);
            
    //         appendingTaskCard = TaskCardComponent.create();

    //         taskList.append(appendingTaskCard);
    //         this.initializeCard(appendingTaskCard, taskList);
    //         this.dispatchEvent(new CustomEvent(TaskBoardEvent.TaskAdd, { detail: { card: appendingTaskCard, list: taskList, order: customEvent.detail.order }}));
    //     });
    //     taskList.addEventListener('added', (event: Event|CustomEvent) =>
    //     {
    //         event.stopPropagation();
    //         event.preventDefault();

    //         const customEvent = (event as CustomEvent);
    //         if(customEvent.detail.target != appendingTaskCard)
    //         {
    //             this.initializeCard(customEvent.detail.target, taskList);
    //             this.dispatchEvent(new CustomEvent(TaskBoardEvent.TaskAdd, { detail: { card: customEvent.detail.target, list: taskList, order: customEvent.detail.order }}));
    //         }
    //     });
    //     taskList.addEventListener('change', (event: Event|CustomEvent) =>
    //     {
    //         event.stopPropagation();
    //         event.preventDefault();
            
    //         this.dispatchEvent(new CustomEvent(TaskBoardEvent.ListChange, { detail: { list: taskList, target: (event as CustomEvent).detail.target }}));
    //     });
    //     taskList.addEventListener('collapse', (event: Event|CustomEvent) =>
    //     {
    //         event.stopPropagation();
    //         event.preventDefault();
            
    //         this.dispatchEvent(new CustomEvent(TaskBoardEvent.ListCollapse, { detail: { list: taskList, collapsed: taskList.hasAttribute('collapsed') }}));
    //     });

    //     const cards = [...taskList.querySelectorAll('task-card')];
    //     for(let i = 0; i < cards.length; i++)
    //     {
    //         const taskCard = cards[i] as TaskCardComponent;
    //         this.initializeCard(taskCard, taskList);
    //     }

    //     this.handledItems.add(taskList);
    // }

    // initializeCard(taskCard: TaskCardComponent, taskList: TaskListComponent)
    // {
    //     taskCard.addEventListener('dragstart', (event: DragEvent) =>
    //     {
    //         // create an identifier, so the lists can each find
    //         // this task. It allows them to easily handle this 
    //         // task differently than other tasks.
    //         const dragId = Math.floor(Math.random() * 1000).toString();
    //         event.dataTransfer!.setData('text/plain', dragId);
    //         taskCard.dataset.dragId = dragId;
    //     });
    //     taskCard.addEventListener('dragend', (_event: DragEvent) =>
    //     {
    //         if(taskCard.dataset.dragId == null) { return; }
    //         const newList = this.querySelector('task-list:has(task-card[data-drag-id])');
    //         // revoke the identifier, after the drag has ended
    //         delete taskCard.dataset.dragId;
    //         this.dispatchEvent(new CustomEvent(TaskBoardEvent.TaskMove, { detail: { card: taskCard, previousList: taskList, newList }}));
    //     });
    //     taskCard.addEventListener('change', (event: Event|CustomEvent) =>
    //     {
    //         this.dispatchEvent(new CustomEvent(TaskBoardEvent.TaskChange, { detail: { card: taskCard, list: taskList, target: (event as CustomEvent).detail.target }}));
    //     });
    //     taskCard.findPart('remove-button').addEventListener('click', (_event) =>
    //     {
    //         taskCard.remove();
    //         this.dispatchEvent(new CustomEvent(TaskBoardEvent.TaskRemove, { detail: { card: taskCard, list: taskList }}));
    //     });
    //     this.handledItems.add(taskCard);
    // }
}
if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskBoardElement);
}