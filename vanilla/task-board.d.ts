declare enum TaskBoardEvent {
    Change = "change",
    ListCollapse = "listcollapse",
    ListChange = "listchange",
    ListAdd = "listadd",
    ListRemove = "listremove",
    ListMove = "listmove",
    TaskAdd = "taskadd",
    TaskRemove = "taskremove",
    TaskChange = "taskchange",
    TaskMove = "taskmove"
}
declare class TaskBoardElement extends HTMLElement {
    static observedAttributes: never[];
    handledItems: WeakSet<Element>;
    constructor();
}

export { TaskBoardElement, TaskBoardEvent };
