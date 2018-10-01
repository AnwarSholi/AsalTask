import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AllCategoriesComponent } from './first-page/all-categories/all-categories.component';
import { ChartComponent } from './first-page/chart/chart.component';
import { EachCategoryComponent } from './first-page/each-category/each-category.component';
import { FooterOptionsComponent } from './first-page/footer-options/footer-options.component';
import { HeaderMonthNamesComponent } from './first-page/header-month-names/header-month-names.component';
import { TotalExpensesComponent } from './first-page/total-expenses/total-expenses.component'
import { RouterModule, Routes } from '@angular/router';

import { FirstPageService } from './service/first-page.service'
import {HttpClientModule} from '@angular/common/http';

import { AllCategoriesCalculateComponent } from './add-expenses/all-categories-calculate/all-categories-calculate.component';
import { ButtonExpensesComponent } from './add-expenses/button-expenses/button-expenses.component';
import { InputExpensesComponent } from './add-expenses/input-expenses/input-expenses.component';
import { KeypadComponent } from './add-expenses/keypad/keypad.component';
import { TitleCloseComponent } from './add-expenses/title-close/title-close.component';
import { AllComponentsComponent } from './add-expenses/all-components/all-components.component'

const appRoutes = [
  {path:'home', component:HeaderMonthNamesComponent},
  {path:'addExpenses', component: AllComponentsComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AllCategoriesComponent,
    ChartComponent,
    EachCategoryComponent,
    FooterOptionsComponent,
    HeaderMonthNamesComponent,
    TotalExpensesComponent,
    AllCategoriesCalculateComponent,
    ButtonExpensesComponent,
    InputExpensesComponent,
    KeypadComponent,
    TitleCloseComponent,
    AllComponentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirstPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
