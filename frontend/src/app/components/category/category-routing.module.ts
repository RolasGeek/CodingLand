import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './../category/category.component';
import { TopicComponent } from './../topic/topic.component';


const CATEGORY_PATH = 'category/:category_id';
const TOPIC_PATH = '/topic/:topic_id';
const EDIT = '/edit';

const categoryRoutes: Routes = [
        {
            path: CATEGORY_PATH,
            component: CategoryComponent 
        },
        {
            path: CATEGORY_PATH+ TOPIC_PATH,
            component: TopicComponent  
        }
        
        
];

@NgModule({
  imports: [ RouterModule.forChild(categoryRoutes) ],
  exports: [ RouterModule ]
})

export class CategoryRoutingModule{}