import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';
@Component({
  selector: 'app-button-expenses',
  templateUrl: './button-expenses.component.html',
  styleUrls: ['./button-expenses.component.css']
})
export class ButtonExpensesComponent implements OnInit {
  expense:string[];
  str:string;
  constructor(private expenseService:FirstPageService) { }

  ngOnInit() {
    var expenseVar;
    this.expenseService.cast.subscribe(expense=>{
      this.expense=expense;
      console.log("hello girl: "+this.expense);
    });
  }
  
  editTheExpense(event){
 
    this.expenseService.editExpense([
      $('#expensesInput').val(),
      $('#hiddenInputSelectedValue').val(),
      $('#passArray').val()
    ]);
  }

}
