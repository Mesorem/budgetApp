import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetListComponent } from './budgetList/budget-list';
import { BudgetComponent } from './budget/budget';

export const COMPONENTS = [
    BudgetListComponent,
    BudgetComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule{}