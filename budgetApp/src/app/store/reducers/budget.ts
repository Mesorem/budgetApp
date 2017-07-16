import * as budgetAction from './../actions/budget';

import { Map, List } from 'immutable';

export interface State {
    budgets: List<any> | null;
    selected: any | null;
}

const initState = {
    budgets: List(),
    selected: null
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



export const getBudgets = (state: State) => state.budgets;

export const getSelected = (state: State) => state.selected;


