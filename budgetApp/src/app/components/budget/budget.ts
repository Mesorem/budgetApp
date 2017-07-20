import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Map } from 'immutable';

@Component({
    selector: 'budget-card',
    templateUrl: './budget.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetComponent {
    @Input() budgetMap: Map<string, any>;
    @Output('selected') selected: EventEmitter<Map<string, any>> = new EventEmitter();
    @Output('unselected') unselected: EventEmitter<Map<string, any>> = new EventEmitter();

    getBorderStyle(): any {
        let budget = this.budgetMap.get('budget')
        let color = budget.get('selected') ? 'green' : budget.get('color')
        return {
            'border-left': '3px solid '.concat(color)
        }
    }

    clicked() {
        this.budgetMap.getIn(['budget', 'selected']) 
        ? this.unselected.emit(this.budgetMap)
        : this.selected.emit(this.budgetMap)
    }

}