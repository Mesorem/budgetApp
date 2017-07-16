import { Action } from '@ngrx/store';

export type BudgetAction = LoadAction
    | UpdateAction
    | CreateAction
    | SelectAction
    | DeleteAction;

export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const SELECT = "SELECT";
export const LOAD_INTENT = "LOAD_INTENT";
export const LOAD = "LOAD"

export class LoadAction implements Action {
    type: string = LOAD;

    constructor(public payload) {}
}

export class LoadIntentAction implements Action {
    type: string = LOAD_INTENT;

    constructor() {}
}

export class UpdateAction implements Action {
    type: string = UPDATE;

    constructor(public payload) {}
}

export class CreateAction implements Action {
    type: string = CREATE;

    constructor(public payload) {}
}

export class SelectAction implements Action {
    type: string = SELECT;

    constructor(public payload) {}
}

export class DeleteAction implements Action {
    type: string = DELETE;

    constructor(public payload) {}
}
