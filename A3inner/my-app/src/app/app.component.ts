import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  public ngOnInit(){
    $(document).ready(function(){
      /************** Any JQuery ******************/
      $('div').css(
        {
          'background-color':'red'
        }
      );
    });
  }
}
