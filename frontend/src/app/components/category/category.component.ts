import { Component, OnInit } from '@angular/core';
import { Topic } from './../../classes/topic';
import { TopicService } from './../../services/topic/topic.service';
import { CategoryService } from './../../services/category/category.service';
import { MatTableModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicModalComponent } from './../topic/topic-modal/topic-modal.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  topics : Array<Topic>
  deleted : boolean; 
  categoryId : number;
  constructor(public topicService : TopicService, private route : ActivatedRoute, private modalService :NgbModal ) { }

  ngOnInit() {
      this.route.params.subscribe( params => {
          this.categoryId = +params['category_id'];
      });
      this.topicService.getAll(this.categoryId).subscribe(data => {this.topics = data;console.log(this.topics)} );
  }
  
  delete(id) {
      this.topicService.delete(id).subscribe(suc => { this.deleted = true}, err => {this.deleted = false;
      })
      delete this.topics;
      this.ngOnInit();
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

}
