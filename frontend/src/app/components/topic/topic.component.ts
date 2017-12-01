import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { TopicService } from './../../services/topic/topic.service';
import { PostService } from './../../services/post/post.service';
import { AuthService } from './../../services/auth/auth.service';

import { Topic } from './../../classes/topic';
import { Post } from './../../classes/post';
import { routerTransition } from './../../router.animations';
import {PostModalComponent} from './post-modal/post-modal.component';
import { InfoModalComponent } from './../info-modal/info-modal.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
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
  markAsAnswer(post) {
      if(this.onlyAnswer()) {
          post.isCorrect = true;
          this.put(post, 'Marked as answer');
      } else {
          const modalRef = this.modalService.open(InfoModalComponent, {size: 'sm'});
          modalRef.componentInstance.text = 'Cant mark more than one as answer';
          modalRef.result.then();
      }
  }
 
  delete(id) {
      this.postService.delete(id).subscribe(suc => {
          const modalRef = this.modalService.open(InfoModalComponent, {size: 'sm'});
          modalRef.componentInstance.text = 'Post deleted!';
          modalRef.result.then((data) => {
              this.ngOnInit();
            }, (reason) => {
              // on dismiss
            });
      }, err =>{});
  }
  unmarkAsAnswer(post) {
      console.log(this.myTopic());
          post.isCorrect = false;
          this.put(post, 'Unmarked as answer');
  }
  
  
  put(post, text) {
      this.postService.update(post).subscribe(suc => {
          const modalRef = this.modalService.open(InfoModalComponent, {size: 'sm'});
          modalRef.componentInstance.text = text;
          modalRef.result.then((data) => {
              this.ngOnInit();
            }, (reason) => {
              // on dismiss
            });
      }, err =>{});
  }
  
 /**
  * Checks if the is post selected as answer
  */
  onlyAnswer() { 
      return this.posts.filter(item => item.isCorrect).length == 0;
  }
  
  /**
   * Checks if topic is owned by logged in user
   */
  myTopic() { 
      if(this.auth.isLoggedIn() && this.auth.user) {
          return this.topic.user.userName === this.auth.user.userName;
      }
  }
  
  
  myPost(post) { 
      if(this.auth.isLoggedIn() && this.auth.user) {
      return post.user.userName === this.auth.user.userName;
      }
  }
  
}
