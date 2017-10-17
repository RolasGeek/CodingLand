import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopicService } from './../../../services/topic/topic.service';
import { Topic } from './../../../classes/topic';
import { AuthService } from './../../../services/auth/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component( {
    selector: 'app-topic-modal',
    templateUrl: './topic-modal.component.html',
    styleUrls: ['./topic-modal.component.css']
} )
export class TopicModalComponent implements OnInit {

    
    @Input() categoryId: number;
    @Input() topic: Topic;
    topicForm: FormGroup;
    error: boolean;

    constructor( public activeModal: NgbActiveModal, public topicService: TopicService, public auth : AuthService, private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.topicForm = this.fb.group( {
            id: 0,
            categoryId: '',
            name: ['', Validators.required],
            description: ['', Validators.required],
            createdBy : this.auth.user.id
        } );
    }
    ngOnInit() {
        if ( this.topic) {
            this.topicService.get( this.topic.id ).subscribe( data => {
            this.topic = data;
                this.topicForm.patchValue( { id: data.id, name: data.name, description: data.description } );
            } )
        }
        this.topicForm.patchValue( {categoryId: this.categoryId});

    }

    get name() { return this.topicForm.get( 'name' ); }
    get description() { return this.topicForm.get( 'description' ); }


    save( values ) {
        if ( values.id == 0 ) {
            this.topicService.post( values ).subscribe( suc => { this.activeModal.close('Insert')}, err => {this.error = true;});
            
        } else {
            this.topicService.update( values ).subscribe( suc => { this.activeModal.close('Insert')}, err => {this.error = true;});
        }
    }

}
