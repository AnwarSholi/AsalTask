import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMonthNamesComponent } from './header-month-names/header-month-names.component';
import { FooterOptionsComponent } from './footer-options/footer-options.component';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { ChartComponent } from './chart/chart.component';
import { EachCategoryComponent } from './each-category/each-category.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderMonthNamesComponent, 
    FooterOptionsComponent, 
    TotalExpensesComponent, 
    AllCategoriesComponent, 
    ChartComponent, 
    EachCategoryComponent
  ]
})
export class FirstPageModule { }
