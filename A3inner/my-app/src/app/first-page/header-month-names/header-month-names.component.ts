import { Component, OnInit } from '@angular/core';
import { FirstPageService, Months } from '../../service/first-page.service';
@Component({
  selector: 'app-header-month-names',
  templateUrl: './header-month-names.component.html',
  styleUrls: ['./header-month-names.component.css']
})
export class HeaderMonthNamesComponent implements OnInit {

  months:string[];
  allMonthesExpenses:Object;
  private service:FirstPageService = new FirstPageService(0);
  constructor() { }
  ngOnInit() {
    var ts;
    var monthIndex;
    this.months=this.service.getMonths();
    this.allMonthesExpenses = this.service.getAllMonthsExpenses();
    //console.log(Object.keys(this.allMonthesExpenses));
    //console.log("hey ");
    
    
    var monthsVar:any =this.months;
    $(document).ready(function(){
      $('.carousel-item:first').addClass('active');
      $('#carouselExampleControls').on('touchstart', function(e) {
        $('canvas').css(
          {
            'width':'100%'
          }
        );
        // the user touched the screen!
        ts=e.touches[0].clientX;
      });
      $('#carouselExampleControls').on('touchend', function(e) {
        // the user touched the screen!
        var te = e.changedTouches[0].clientX;
        monthIndex=monthsVar.indexOf($(this).text().trim());
        var x = $('li:eq('+monthIndex+')');
        
        if(ts > te+5 && monthIndex<11){
          (<any>$("#carouselExampleControls")).carousel("next");
        }else if(ts < te-5){
          (<any>$("#carouselExampleControls")).carousel("prev");
        }
      });
    });

    /**************************************************/
    
  }
}
