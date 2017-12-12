import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category/category.service';
import { Category } from './../../classes/category';
import { routerTransition } from './../../router.animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModalComponent } from './../category/category-modal/category-modal.component';
import { InfoModalComponent } from './../info-modal/info-modal.component';
import { AuthService } from './../../services/auth/auth.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MainPageComponent implements OnInit {
  categories : Category[];
  position = 'before';
  constructor(public service : CategoryService, private modalService : NgbModal, public auth : AuthService) {
   
  }

  ngOnInit() {
      this.service.getAll().subscribe(categories => {this.categories = categories});
  }
  
  open(category) {
      const modalRef = this.modalService.open(CategoryModalComponent, { size : 'lg'});
      modalRef.componentInstance.category = category;
      modalRef.result.then((data) => {
          this.ngOnInit();
      }, (reason) => {
          
      });
  }
  
  delete(id) {
      this.service.delete(id).subscribe(suc => {
          const modalRef = this.modalService.open(InfoModalComponent, {size: 'sm'});
          modalRef.componentInstance.text = 'Category deleted!';
          modalRef.result.then((data) => {
              this.ngOnInit();
            }, (reason) => {
              // on dismiss
            });
      }, err =>{});
  }
  

}
