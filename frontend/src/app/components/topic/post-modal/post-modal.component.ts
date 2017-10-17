import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from './../../../classes/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../../../services/post/post.service';


@Component( {
    selector: 'app-post-modal',
    templateUrl: './post-modal.component.html',
    styleUrls: ['./post-modal.component.css']
} )
export class PostModalComponent implements OnInit {

    @Input() post;
    @Input() topicId;
    @Input() userId;
    postForm: FormGroup;
    error : boolean;

    constructor( public activeModal: NgbActiveModal, private fb: FormBuilder, private postService: PostService ) { this.createForm() }

    ngOnInit() {

        if(this.post) {
            console.log(this.post);
        this.postForm.patchValue( { id: this.post.id, comment: this.post.comment, solution: this.post.solution } );
        }
        this.postForm.patchValue( { topicId : this.topicId, userId : this.userId} );
    }

    createForm() {
        this.postForm = this.fb.group( {
            id: 0,
            comment: ['', Validators.required],
            solution: ['', Validators.required],
            userId: [''],
            topicId: ['']
        } );
    }
    get comment() { return this.postForm.get( 'comment' ); }
    get solution() { return this.postForm.get( 'solution' ); }
    
    save1() {
        this.activeModal.close('Save');
    }
    
    save( values ) {
        console.log(values);
        if ( this.postForm.valid ) {
            if ( values.id === 0 ) {
                this.postService.post( values ).subscribe( suc => { this.activeModal.close('Insert')}, err => {this.error = true;});
            } else {
                this.postService.update( values ).subscribe( suc => { this.activeModal.close('Update'), err => {this.error = true;}});
            }
        }
    }

}
