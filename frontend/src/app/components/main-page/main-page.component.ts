import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category/category.service';
import { Category } from './../../classes/category';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    
  categories : Category[];
 
  constructor(public service : CategoryService) {}

  ngOnInit() {
      this.service.getAll().subscribe(categories => {this.categories = categories});
  }

  
  

}
