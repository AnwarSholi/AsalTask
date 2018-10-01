/*app.component.ts*/
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min.js';
//var CanvasJS = require('./canvasjs.js');
export var chart;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() allMonths:string[];
  @Input() thisMonth:string;
  
	ngOnInit() {
    var myMonths=this.allMonths;
    
    var i=0, j=0;
    var key;
    var eachMonth;
    function onClick(e) {
      alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
    }
   
    window.onload = function(){
      for(i=0; i<myMonths.length; i++){
        let dataPoints = [];
        let dpsLength = 0;
        chart = new CanvasJS.Chart(myMonths[i],{
          animationEnabled: true,
          height:145,
          axisX: {
            lineColor: "#D6D6DE",
            lineThickness: 3,
            labelFontColor: "#D6D6DE"
          },
          axisY: {
            gridDashType: "dash",
            gridThickness: 2,
            gridColor: "#D6D6DE",
            lineColor: "#D6D6DE",
            labelFontColor: "#D6D6DE",
            lineThickness: 0,
            labelFormatter: function(e){
              return  "$"+ e.value;
            }
          },
          data: [{
            type: "spline",
            //markerColor: "#39428F",
            markerType: "none",
            //markerBorderColor: "white",
            //markerBorderThickness: 5,
            lineThickness: 4,
            dataPoints: [
              { x: 2, y: 100},
              { x: 4, y: 200},
              { x: 6, y: 300},
              { x: 8, y: 400},
              { x: 10, y: 500},
              { x: 12, y: 200},
              { x: 14, y: 100},
              { x: 16, y: 400},
              { x: 18, y: 700},
              { x: 20, y: 900},
              { x: 22, y: 800},
              { x: 24, y: 200},
              { x: 26, y: 100},
              { x: 28, y: 200},
              { x: 30, y: 1200}
              ],
          }
        ]
          
        });

        //key=Object.keys(allMonthesExpensesJS)[i];
        //eachMonth=allMonthesExpensesJS[key];
        //*****console.log(allMonthesExpensesJS[Object.keys(allMonthesExpensesJS)[0]]);
        //console.log(allMonthesExpensesJS);
        //$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function(data) {  
        // $.each(data, function(key, value){
        //   dataPoints.push({x: value[0], y: parseInt(value[1])});
        // });
          dpsLength = dataPoints.length;
          chart.render();
          
        //});
      }
    }//onLoad Function
  }
  
}
