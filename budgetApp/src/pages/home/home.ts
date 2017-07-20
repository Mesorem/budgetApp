import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { State, getBudgets, getSelectedBudget } from '../../app/store/index';
import { LoadIntentAction, SelectAction, UnselectAction } from '../../app/store/actions/budget';

import { List, Map } from 'immutable';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  budgets$: Observable<List<any>>;
  selected$: Observable<List<any>>;
  budgetFeed$;

  constructor(public navCtrl: NavController, public store: Store<State>) {}

  ngOnInit(){
    this.store.dispatch(new LoadIntentAction());
    this.budgets$ = this.store.select(getBudgets);
    this.selected$ = this.store.select(getSelectedBudget);

    this.budgetFeed$ = this.budgets$.combineLatest(this.selected$, (budgets, selected) => {
      return budgets.map(budget => {
        return selected.some(selectedBudget => this.isIdEqual(selectedBudget, budget))
          ? budget.updateIn(['budget', 'selected'], updater => true)
          : budget.updateIn(['budget', 'selected'], updater => false)
      })
    })
  }

  selectedBudget(budget: Map<string, any>): void {
    this.store.dispatch(new SelectAction(budget));
  }

  unselectBudget(budget: Map<string, any>): void {
    this.store.dispatch(new UnselectAction(budget));
  }

  private isIdEqual(budget: Map<string, any>, budget2: Map<string, any>){
    return budget.getIn(['budget', 'id']) == budget2.getIn(['budget', 'id']);
  }

}
