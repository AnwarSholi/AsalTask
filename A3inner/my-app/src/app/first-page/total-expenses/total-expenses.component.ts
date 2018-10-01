import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.css']
})
export class TotalExpensesComponent implements OnInit {
  totalExpensesOfficial: number;
  arrOfExpensesString: string[];
  arrOfExpensesNumber: number[];
  private service:FirstPageService = new FirstPageService();
  constructor() { }

  ngOnInit() {
    this.totalExpensesOfficial=0;
    this.arrOfExpensesString=this.service.getAllExpenses();
    var i=0;
    for(i=0; i<this.arrOfExpensesString.length; i++){
      this.arrOfExpensesString[i] = this.arrOfExpensesString[i].substr(1);
      this.totalExpensesOfficial+=parseInt(this.arrOfExpensesString[i],10);
    }
    console.log(this.totalExpensesOfficial);
  }

}
