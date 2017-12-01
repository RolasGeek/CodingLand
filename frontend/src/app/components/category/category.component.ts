import { Component, OnInit } from '@angular/core';
import { Topic } from './../../classes/topic';
import { TopicService } from './../../services/topic/topic.service';
import { CategoryService } from './../../services/category/category.service';
import { MatTableModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicModalComponent } from './../topic/topic-modal/topic-modal.component';
import { routerTransition } from './../../router.animations';
import { AuthService} from './../../services/auth/auth.service';
import { InfoModalComponent } from './../info-modal/info-modal.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
 
})
export class CategoryComponent implements OnInit {
  topics : Array<Topic>
  deleted : boolean; 
  categoryId : number;
  constructor(public topicService : TopicService, private route : ActivatedRoute, private modalService :NgbModal, public auth : AuthService ) { }

  ngOnInit() {
      this.route.params.subscribe( params => {
          this.categoryId = +params['category_id'];
      });
      this.topicService.getAll(this.categoryId).subscribe((data : Array<Topic>)=> {this.topics = data;console.log(data);} )
   
  }
  
  delete(id) {
      this.topicService.delete(id).subscribe(suc => {
          this.openInfo('Topic deleted');  
          }, err => {
      });
    
  }
  
  openInfo(text) {
      const modalRef = this.modalService.open(InfoModalComponent, { size: 'sm' });
      modalRef.componentInstance.text = text;
      modalRef.result.then((data) => {
          this.topics = new Array<Topic>();
          this.ngOnInit();
        }, (reason) => {
          // on dismiss
        });
  }
  
  open(topic) {
      const modalRef = this.modalService.open(TopicModalComponent, { size: 'lg' });
      modalRef.componentInstance.topic = topic;
      modalRef.componentInstance.categoryId = this.categoryId;
      modalRef.result.then((data) => {
          this.ngOnInit();
        }, (reason) => {
          // on dismiss
        });
    }
  
  myTopic(topic) {
      if(this.auth.isLoggedIn() && this.auth.user) {
          return topic.user.userName == this.auth.user.userName;
      }
  }

}
