import * as budgetAction from './../actions/budget';

import { Map, List } from 'immutable';

export interface State {
    budgets: List<any> | null;
    selected: List<any> | null;
}

const initState = {
    budgets: List(),
    selected: List()
}

export const reducer = (state: State = initState, action: budgetAction.BudgetAction): Object => {

    switch (action.type) {
        case budgetAction.CREATE:
            return {

            }
        case budgetAction.DELETE:
            return {

            }
        case budgetAction.UPDATE:
            return {

            }
        case budgetAction.SELECT: 
            return {
                budgets: state.budgets,
                selected: state.selected.push(action.payload)
            }
        case budgetAction.UNSELECT:
            return {
                budgets: state.budgets,
                selected: remove(state.selected, action.payload)
            }
        case budgetAction.LOAD: 
            return {
                budgets: indexPayload(action.payload),
                selected: state.selected
            }
        default:
            return state;
    }

}

const indexPayload = (payload: List<Object>) => {
    let index = 0;
    return payload.map(elem => Map().set("indx", index++).set("budget", Map(elem)));
}

const remove = (selected: List<any>, toDelete: Map<string, any>): List<any> => {
    let indexOf = selected.indexOf(toDelete)
    return selected.delete(indexOf)
}

export const getBudgets = (state: State) => state.budgets;

export const getSelected = (state: State) => state.selected;


