import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';

@Component({
  selector: 'app-input-expenses',
  templateUrl: './input-expenses.component.html',
  styleUrls: ['./input-expenses.component.css']
})
export class InputExpensesComponent implements OnInit {
  
  constructor(private expenseService:FirstPageService) { }

  ngOnInit() {
  }
  
}
