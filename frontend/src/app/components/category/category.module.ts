import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//Service
import { TopicService } from './../../services/topic/topic.service';
import { PostService } from './../../services/post/post.service';

//Component
import { CategoryComponent } from './../category/category.component';
import { TopicComponent } from './../topic/topic.component';

//Modal
import { PostModalComponent } from './../topic/post-modal/post-modal.component';
import { TopicModalComponent } from './../topic/topic-modal/topic-modal.component';

import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
    imports: [     
      BrowserModule,
      CategoryRoutingModule,
      NgbModule
    ],
    declarations: [
          CategoryComponent,
          TopicComponent
    ],
    providers: [TopicService, PostService],
    entryComponents: [PostModalComponent, TopicModalComponent]
  })
  export class CategoryModule { } 