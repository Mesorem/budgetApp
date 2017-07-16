import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { State, getBudgets } from '../../app/store/index';
import { LoadIntentAction } from '../../app/store/actions/budget';

import { List } from 'immutable';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  budgets$: Observable<List<Object>>;

  constructor(public navCtrl: NavController, public store: Store<State>) {}

  ngOnInit(){
    this.store.dispatch(new LoadIntentAction());
    this.budgets$ = this.store.select(getBudgets);
  }

}
