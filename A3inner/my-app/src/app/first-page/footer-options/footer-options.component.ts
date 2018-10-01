import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../service/first-page.service';
@Component({
  selector: 'app-footer-options',
  templateUrl: './footer-options.component.html',
  styleUrls: ['./footer-options.component.css']
})
export class FooterOptionsComponent implements OnInit {
  allImages:string[];
  allRouterLinks:string[];
  private service:FirstPageService = new FirstPageService(0);
  constructor() { }

  ngOnInit() {
    this.allImages=this.service.getAllIcons();
    this.allRouterLinks=this.service.getAllRouterLinks();
  }

}
