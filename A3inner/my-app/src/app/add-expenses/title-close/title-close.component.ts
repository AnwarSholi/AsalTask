import { Component, OnInit } from '@angular/core';
import { chart } from '../../first-page/chart/chart.component';
import { FirstPageService } from '../../service/first-page.service';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '../../../../node_modules/@angular/forms/src/directives';
@Component({
  selector: 'app-title-close',
  templateUrl: './title-close.component.html',
  styleUrls: ['./title-close.component.css']
})
export class TitleCloseComponent implements OnInit {
expense:string[];
firstPar:string;
secondPar:string;
thirdPar:string;
  constructor(private service:FirstPageService) { }

  ngOnInit() {
    var first=this.firstPar;
    var second=this.secondPar;
    var third=this.thirdPar;
    this.service.cast.subscribe(expense=>{
      this.expense=expense;
      this.firstPar=this.expense[0];
      this.secondPar=this.expense[1];
      this.thirdPar=this.expense[2];
      first=this.firstPar;
      second=this.secondPar;
      third=this.thirdPar;
    });
  }
  nothing(){
      console.log(this.expense[2]);
  }
  

}
