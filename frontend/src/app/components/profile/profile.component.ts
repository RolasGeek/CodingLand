import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { User } from './../../classes/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoModalComponent } from './../info-modal/info-modal.component';
import { routerTransition } from './../../router.animations';
import { ActivatedRoute } from '@angular/router';

@Component( {
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
} )
export class ProfileComponent implements OnInit {

    user: User;
    userName: string;
    userInfoEdit: FormGroup;
    passReset: FormGroup;
    editMode: boolean = false;
    changePassActive: boolean = false;
    passError: boolean = false;
    constructor( public auth: AuthService, public fb: FormBuilder, public modalService: NgbModal, public route : ActivatedRoute ) { this.createForm(); 
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.userName = params['user'];
            if(this.userName) {
                this.auth.get(this.userName).subscribe((data : User) => {this.user = data;})
            } else {
                this.auth.me().subscribe(( data: User ) => {
                    this.user = data;
                    this.userInfoEdit.patchValue( { email: data.email, firstName: data.firstName, lastName: data.lastName } );
                } );
            }
          });
    }

    createForm() {
        this.userInfoEdit = this.fb.group( {
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', [Validators.required, Validators.minLength( 4 )]],
            lastName: ['', [Validators.required, Validators.minLength( 4 )]]
        } );
        this.passReset = this.fb.group( {
            oldPassword: ['', Validators.required],
            password: ['', Validators.required, ],
            rPassword: ['', [Validators.required, this.duplicatePassword]],
        } )
    }
    //Form getters
    get email() { return this.userInfoEdit.get( 'email' ); }
    get firstName() { return this.userInfoEdit.get( 'firstName' ); }
    get lastName() { return this.userInfoEdit.get( 'lastName' ); }
    get oldPassword() { return this.passReset.get( 'oldPassword' ); }
    get password() { return this.passReset.get( 'password' ); }
    get rPassword() { return this.passReset.get( 'rPassword' ); }

    edit() {
        this.editMode = this.editMode ? false : true;
    }

    changePassVisibility() {
        this.changePassActive = this.changePassActive ? false : true;
    }

    save( data ) {
        if ( this.userInfoEdit.valid ) {
            data.id = this.user.id;
            this.auth.put( data ).subscribe( any => {
                this.edit();
                this.openModal( "User info succesfully changed" )
            } );
        }

    }

    changePass( data ) {
        if ( this.passReset.valid ) {
            data.userName = this.user.userName;
            this.auth.changePass( data ).subscribe( suc => {
                this.openModal( "Password changed" );
                this.changePassVisibility();
                this.passError = false;
            }, err => { this.passError = true; } );
        }
    }
    resetPass() {
        this.openModal( "Not implemented" );
    }
    duplicatePassword( input ) {
        if ( !input.root || !input.root.controls ) {
            return null;
        }
        const exactMatch = input.root.controls.password.value === input.value;
        return exactMatch ? null : { mismatchedPassword: true };
    }

    openModal( text ) {
        const modalRef = this.modalService.open( InfoModalComponent, { size: 'sm' } );
        modalRef.componentInstance.text = text;
        modalRef.result.then(( data ) => {
            this.ngOnInit();
        }, ( reason ) => {
            this.ngOnInit();
        } );
    }
}
