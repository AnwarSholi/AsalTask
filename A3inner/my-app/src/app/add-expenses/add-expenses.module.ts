import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCloseComponent } from './title-close/title-close.component';
import { InputExpensesComponent } from './input-expenses/input-expenses.component';
import { KeypadComponent } from './keypad/keypad.component';
import { ButtonExpensesComponent } from './button-expenses/button-expenses.component';
import { AllCategoriesCalculateComponent } from './all-categories-calculate/all-categories-calculate.component';
import { AllComponentsComponent } from './all-components/all-components.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleCloseComponent, InputExpensesComponent, KeypadComponent, ButtonExpensesComponent, AllCategoriesCalculateComponent, AllComponentsComponent]
})
export class AddExpensesModule { }
