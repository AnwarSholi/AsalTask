import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';
@Component({
  selector: 'app-footer-options',
  templateUrl: './footer-options.component.html',
  styleUrls: ['./footer-options.component.css']
})
export class FooterOptionsComponent implements OnInit {
  allImages:string[];
  private service:FirstPageService = new FirstPageService(0);
  constructor() { }

  ngOnInit() {
    this.allImages=this.service.getAllIcons();
    console.log(this.allImages);
  }

}
