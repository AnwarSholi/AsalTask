import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';
@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  allIconCategories:string[];
  allTitleCategories:string[];
  allExpenses:string[];
  private service:FirstPageService = new FirstPageService(0);
  constructor() { }

  ngOnInit() {
    this.allIconCategories=this.service.getAllIconCategories();
    this.allTitleCategories=this.service.getAllTitleCategories();
    this.allExpenses= this.service.getAllExpenses();
  }

}
