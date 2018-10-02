import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  expense:string[];
  indexOfSelected:number;
  selectedCategory:string;
  allTitleCategories:string[];
  allExpenses:string[];
  allIconCategories:string[];
  
  constructor(private service:FirstPageService) { }
  
  ngOnInit() {
    this.allIconCategories=this.service.getAllIconCategories();
    this.allTitleCategories=this.service.getAllTitleCategories();
    this.allExpenses= this.service.getAllExpenses();
    this.service.cast.subscribe(expense=>{
      this.expense=expense;
      this.selectedCategory=this.expense[1];
      this.indexOfSelected=this.allTitleCategories.indexOf(this.selectedCategory);
      this.allExpenses[this.indexOfSelected]=this.expense[0];
    });  
  }
}
