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
  tempEditedExpense:number;
  tempOldExpense:number;
  editedExpense:string;
  indexOfSelected:number;
  myArray:string[];
  counter: number;
  constructor( private service:FirstPageService) { }

  ngOnInit() {
    this.totalExpensesOfficial=0;
    this.counter=0;
    var i=0;
    var x;
    this.allTitleCategories=this.service.getAllTitleCategories();
    this.service.cast.subscribe(expense=>{
      this.totalExpensesOfficial=0;
      this.expense=expense;
      this.arrOfExpensesString=this.expense[2].split(",");
      console.log(this.expense[2]+" why");
      this.myArray=this.expense[2].split(",");
      this.editedExpense=this.expense[1];
      this.indexOfSelected=this.allTitleCategories.indexOf(this.editedExpense);

      //removing dollar sign then calculating total expenses
      for(i=0; i<this.arrOfExpensesString.length; i++){
        this.arrOfExpensesString[i] = this.arrOfExpensesString[i].substr(1);
        this.tempEditedExpense=parseInt(this.arrOfExpensesString[i],10);
        this.totalExpensesOfficial+=this.tempEditedExpense;
        
      }
      
    });
    

  }

}
