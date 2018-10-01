import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';

@Component({
  selector: 'app-input-expenses',
  templateUrl: './input-expenses.component.html',
  styleUrls: ['./input-expenses.component.css']
})
export class InputExpensesComponent implements OnInit {
  editExpense:string;
  constructor(private expenseService:FirstPageService) { }

  ngOnInit() {
  }
  editTheExpense(){
    this.expenseService.editExpense(this.editExpense);
  }
}
