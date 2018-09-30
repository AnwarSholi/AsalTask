import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AllCategoriesComponent } from './first-page/all-categories/all-categories.component';
import { ChartComponent } from './first-page/chart/chart.component';
import { EachCategoryComponent } from './first-page/each-category/each-category.component';
import { FooterOptionsComponent } from './first-page/footer-options/footer-options.component';
import { HeaderMonthNamesComponent } from './first-page/header-month-names/header-month-names.component';
import { TotalExpensesComponent } from './first-page/total-expenses/total-expenses.component'

import { FirstPageService } from './service/first-page.service'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllCategoriesComponent,
    ChartComponent,
    EachCategoryComponent,
    FooterOptionsComponent,
    HeaderMonthNamesComponent,
    TotalExpensesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FirstPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
