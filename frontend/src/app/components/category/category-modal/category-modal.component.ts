import { Component, OnInit , Input} from '@angular/core';
import { Category } from './../../../classes/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './../../../services/category/category.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {

    @Input() category: Category;
    categoryForm: FormGroup;
    error: boolean;

    constructor( public activeModal: NgbActiveModal, public categoryService: CategoryService, private fb: FormBuilder ) {
        this.createForm();
    }

    createForm() {
        this.categoryForm = this.fb.group( {
            id: 0,
            name: ['', Validators.required],
            description: ['', Validators.required],
            objectCode: ['', Validators.required]
        } );
    }
    ngOnInit() {
        if ( this.category ) {
            this.categoryService.get( this.category.id ).subscribe( (data : Category) => {
                this.category = data;
                this.categoryForm.patchValue( { id: data.id, name: data.name, description: data.description, objectCode: data.objectCode } );
            } )
        }

    }

    get name() { return this.categoryForm.get( 'name' ); }
    get description() { return this.categoryForm.get( 'description' ); }
    get objectCode() { return this.categoryForm.get( 'objectCode' ); }


    save( values ) {
        console.log(values);
        if ( this.categoryForm.valid ) {
            if ( values.id == 0 ) {
                this.categoryService.insert( values ).subscribe( suc => { this.activeModal.close( 'Insert' ) }, err => { this.error = true; } );

            } else {
                this.categoryService.update( values ).subscribe( suc => { this.activeModal.close( 'Insert' ) }, err => { this.error = true; } );
            }
        }
    }

}
