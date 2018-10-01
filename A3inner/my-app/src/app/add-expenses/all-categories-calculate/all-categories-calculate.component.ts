import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';
@Component({
  selector: 'app-all-categories-calculate',
  templateUrl: './all-categories-calculate.component.html',
  styleUrls: ['./all-categories-calculate.component.css']
})
export class AllCategoriesCalculateComponent implements OnInit {
  allIconCategories:string[];
  allTitleCategories:string[];
  private service:FirstPageService = new FirstPageService(0);
  constructor() { }

  ngOnInit() {
    this.allIconCategories=this.service.getAllIconCategories();
    this.allTitleCategories=this.service.getAllTitleCategories();
    $(document).ready(function(){
      $('li').on('click','img', function($event){
        $('img').css({
            'border': '0.2em solid whitesmoke'
          }
        );
        $(this).css(
          {
            'border': '0.2em solid #424C9A'
          }
        );
        $('#hiddenInput').val("true");
      });
    });
  }

}
