import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor( public auth: AuthService, private fb: FormBuilder ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group( {
            username: ['', Validators.required],
            password: ['', Validators.required]

        } );
    }
    get username(){ return this.loginForm.get('username'); }
    get password(){ return this.loginForm.get('password'); }
    ngOnInit() {
    }
    
    login(data) {
        if(this.loginForm.valid) {
        this.auth.login(data.username, data.password);
        }
    }

}
