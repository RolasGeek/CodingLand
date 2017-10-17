import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { TopicService } from './../../services/topic/topic.service';
import { PostService } from './../../services/post/post.service';
import { AuthService } from './../../services/auth/auth.service';

import { Topic } from './../../classes/topic';
import { Post } from './../../classes/post';

import {PostModalComponent} from './post-modal/post-modal.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic : Topic;
  posts : Array<Post>;
  topicId : 0;
  constructor(private topicService : TopicService, private auth : AuthService, private postService : PostService, private route : ActivatedRoute, private modalService :NgbModal) {
      this.route.params.subscribe( params => { this.topicId = params['topic_id']});
  }

  ngOnInit() {
          this.topicService.get(this.topicId).subscribe(data => {this.topic = data} );
          this.postService.getAll(this.topicId).subscribe(data => {this.posts = data; console.log(this.posts);});
  }

  open(post) {
      const modalRef = this.modalService.open(PostModalComponent, { size: 'lg' });
      modalRef.componentInstance.post = post;
      modalRef.componentInstance.topicId = this.topicId;
      modalRef.componentInstance.userId = this.auth.user.id;
      modalRef.result.then((data) => {
          this.ngOnInit();
        }, (reason) => {
          // on dismiss
        });
    }
  
  
}
