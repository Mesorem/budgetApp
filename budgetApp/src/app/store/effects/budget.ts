import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as budgetActions from '../actions/budget';
import { Actions, Effect } from '@ngrx/effects';
import { Socket } from '../../services/socket.server';
import { Channel } from '../../services/channel.server';
import { List } from 'immutable';

@Injectable()
export class BudgetEffects {

    channel: Channel;

    constructor(private actions$: Actions,
        private socket: Socket){
    
        socket.connect("ws://localhost:4000/socket", {});
        
        this.channel = socket.channel("budget:join")
        this.channel.join();
    
    }

    @Effect() budgets$: Observable<Action> = this.actions$.ofType(budgetActions.LOAD_INTENT)
        .map(action => action.payload)
        .mergeMap(payload => {
            return this.channel.request("getAll")
                .map(resp => new budgetActions.LoadAction(List(resp.payload)))  
        });
        
}