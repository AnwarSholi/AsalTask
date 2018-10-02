import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.css']
})
export class TotalExpensesComponent implements OnInit {
  expense:string[];
  totalExpensesOfficial: number;
  arrOfExpensesString: string[];
  allTitleCategories: string[];
  arrOfExpensesNumber: number[];
  editedExpense:string;
  indexOfSelected:number;

  constructor( private service:FirstPageService) { }

  ngOnInit() {
    this.totalExpensesOfficial=0;
    this.arrOfExpensesString=this.service.getAllExpenses();
    var i=0;
    this.allTitleCategories=this.service.getAllTitleCategories();
    this.service.cast.subscribe(expense=>{
      this.expense=expense;
      this.editedExpense=this.expense[1];
      this.indexOfSelected=this.allTitleCategories.indexOf(this.editedExpense);
      this.arrOfExpensesString[this.indexOfSelected]=this.expense[0];
      for(i=0; i<this.arrOfExpensesString.length; i++){
        this.arrOfExpensesString[i] = this.arrOfExpensesString[i].substr(1);
        this.totalExpensesOfficial+=parseInt(this.arrOfExpensesString[i],10);
      }
    });
    console.log(this.totalExpensesOfficial);
  }

}
