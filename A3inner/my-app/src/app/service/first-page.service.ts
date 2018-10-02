import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
export enum Months {
                            January, February, March, April, May, June, 
                            July, August, September, October, November, December
                          };
@Injectable({
  providedIn: 'root'
})
export class FirstPageService {
  
  private expense = new BehaviorSubject<string[]>(['hello','category']);
  cast = this.expense.asObservable();
  constructor() { 
    
  }
  editExpense (newExpense){
    this.expense.next(newExpense);
  }
  /********************************************** Start Get all Months, return array */
  getMonths(){
    var arr=new Array();
    for (var index in Months) {
      var isNumber = parseInt(index, 10)>=0;
      if(isNumber)
        {
          arr.push(Months[index]);
        }
    }
    return arr;
  }
  /********************************************** End Get all Months, return array */
  /********************************************** Start Get Total Expenses */
  
  /********************************************** End Get Total Expenses */
  /********************************************** Start Get All Months and Each Month Expenses As Object */
  getAllIcons():string[]{
    return [
      "assets/images/chart.png",
      "assets/images/circleChart.png",
      "assets/images/plus.png",
      "assets/images/wallet.png",
      "assets/images/setting.png"
    ];
  }
  getAllIconCategories():string[]{
    return [
      "assets/images/shopping.png",
      "assets/images/alcohol.png",
      "assets/images/fastfood.png",
      "assets/images/bills.png",
      "assets/images/clothes.png"
    ];
  }
  getAllTitleCategories():string[]{
    return [
      "Shopping",
      "Alcohol",
      "FastFood",
      "Bills",
      "Clothes"
    ];
  }
  getAllExpenses():string[]{
    return [
      "$100",
      "$200",
      "$500",
      "$100",
      "$100"
    ];
  }
  getAllRouterLinks():string[]{
    return [
      "/home",
      "/home",
      "/addExpenses",
      "/home",
      "/home"
    ];
  }
  getAllMonthsExpenses(){
    return {
      Jan:[
            {//on fifth of january 
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{//on tenth of january
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{//on fiftenth of january
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{//on twenty of january
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{//on twentyfifth of january
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{//on thirty of january
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Feb:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Mar:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Apr:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      May:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Jun:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Jul:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Aug:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Sep:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Oct:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Nov:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ],
      Dec:[
            {
              expenses:100,
              Shopping: 10,
              Alcohol:  20,
              FastFood: 50,
              Bills:    10,
              Clothes:  10
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  180,
              FastFood: 450,
              Bills:    90,
              Clothes:  90
            },{
              expenses:300,
              Shopping: 30,
              Alcohol:  60,
              FastFood: 120,
              Bills:    50,
              Clothes:  40
            },{
              expenses:900,
              Shopping: 90,
              Alcohol:  210,
              FastFood: 170,
              Bills:    220,
              Clothes:  210
            },{
              expenses:200,
              Shopping: 20,
              Alcohol:  40,
              FastFood: 100,
              Bills:    20,
              Clothes:  20
            }
          ]
    };
  }//getAllMonthesExpenses Function
  /********************************************** End Get All Months and Each Month Expenses As Object */
  
}
