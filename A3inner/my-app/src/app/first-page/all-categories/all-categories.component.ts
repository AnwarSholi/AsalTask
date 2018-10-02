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
  allExpenses2:string[];
  allIconCategories:string[];
  //passArray:string[];
  //flag:boolean;
  url:string;
  total:number=0;
  percentage:number[];
  constructor(private service:FirstPageService) { }
  
  ngOnInit() {
    this.percentage=new Array();
    this.url=window.location.toString();
    console.log("url Is: "+this.url);
    //this.flag=true;
    var passArray2;
    var x;
    this.allIconCategories=this.service.getAllIconCategories();
    this.allTitleCategories=this.service.getAllTitleCategories();
   // this.allExpenses= this.service.getAllExpenses();
    this.service.cast.subscribe(expense=>{
      this.expense=expense;
      
      this.allExpenses=this.expense[2].split(",");
      console.log("I will Know : "+this.allExpenses);
     // this.passArray=this.expense[2].split(",");
      this.selectedCategory=this.expense[1];
      this.indexOfSelected=this.allTitleCategories.indexOf(this.selectedCategory);
      
      if(this.expense[0]!=="$0"){
          
          x=parseInt(this.allExpenses[this.indexOfSelected].substr(1))+ 
          parseInt(this.expense[0].substr(1));
          console.log("I will Try: "+x);
          this.allExpenses[this.indexOfSelected]="$"+(x);
          this.expense[2]=this.allExpenses.toString();
          console.log("I will Try: "+this.expense[2]);
     }else{
        console.log("expense of 0: "+this.expense[0]);
        this.allExpenses[this.indexOfSelected]=this.expense[0];
     }

     
    });
    var ij=0, im=0;  
    for(ij=0; ij<this.allExpenses.length; ij++){
      this.total+=(parseInt(this.allExpenses[ij].substr(1)));
      console.log(this.allExpenses.length);
    }
    for(im=0; im<this.allExpenses.length;im++){
      this.percentage.push( 100*parseInt(this.allExpenses[im].substr(1))/this.total);
    }
    
  }
}
