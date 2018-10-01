import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    var amount="$";
    var tempAmount;
    $(document).ready(function(){
      $('#expensesInput').val(amount+"0");
      $('#keypad').on('click',':not("#x, #comma")', function(e){
        if($('#hiddenInput').val()==="true"){
          amount+=e.target.textContent.trim();
          $('#expensesInput').val(amount);
        }
      });
      $('#x').on('click',function(e){
        if($('#hiddenInput').val()==="true"){
          tempAmount=$('#expensesInput').val();
          if(tempAmount.length>1){
            amount = amount.substring(0, (amount.length - 1));
            amount=amount.trim();
            $('#expensesInput').val(amount);
          }
        }
      });
      $('#comma').on('click',function(e){
        if($('#hiddenInput').val()==="true"){
          tempAmount=$('#expensesInput').val();
          if(tempAmount.split(",").length===1){
            amount+=e.target.textContent.trim();
            $('#expensesInput').val(amount);
          }
        }
      });
    });
  }

}
