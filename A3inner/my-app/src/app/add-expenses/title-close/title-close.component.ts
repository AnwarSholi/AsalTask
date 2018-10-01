import { Component, OnInit } from '@angular/core';
import { chart } from '../../first-page/chart/chart.component';
@Component({
  selector: 'app-title-close',
  templateUrl: './title-close.component.html',
  styleUrls: ['./title-close.component.css']
})
export class TitleCloseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#close').on('click',function(){
        console.log("hey");
        //location.reload();
      });
    });
  }

}
