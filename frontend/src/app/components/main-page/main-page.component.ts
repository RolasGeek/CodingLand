import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category/category.service';
import { Category } from './../../classes/category';
import { routerTransition } from './../../router.animations';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers: [NgbCarouselConfig]
})
export class MainPageComponent implements OnInit {
  categories : Category[];
   
  constructor(public service : CategoryService, config: NgbCarouselConfig) {
   // customize default values of carousels used by this component tree
      config.interval = 1000;
      config.wrap = true;
      config.keyboard = false;
  }

  ngOnInit() {
      this.service.getAll().subscribe(categories => {this.categories = categories});
  }
 
  
  

}
