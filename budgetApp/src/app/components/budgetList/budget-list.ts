import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { List } from 'immutable';

@Component({
    selector: 'budget-list',
    templateUrl: './budget-list.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetListComponent {
    @Input() budgets: List<Object>;
    @Output('selected') selected: EventEmitter<Map<string, any>> = new EventEmitter();
    @Output('unselected') unselected: EventEmitter<Map<string, any>> = new EventEmitter();
}