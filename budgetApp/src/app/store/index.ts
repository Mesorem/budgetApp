import * as fromBudget from './reducers/budget';
import { createSelector } from './reselect/index';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
    budget: fromBudget.State;
}

const reducers = {
    budget: fromBudget.reducer
}
export const reducer: ActionReducer<State> = combineReducers(reducers);

export const getBudgetState = (state: State) => state.budget;

export const getBudgets = createSelector(getBudgetState, fromBudget.getBudgets);
export const getSelectedBudget = createSelector(getBudgetState, fromBudget.getSelected);

