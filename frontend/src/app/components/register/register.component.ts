import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { User } from './../../classes/user';
import { routerTransition } from './../../router.animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;

  constructor( public auth: AuthService, private fb: FormBuilder ) {
      this.createForm();
  }
  
  
  duplicatePassword(input) {
      if (!input.root || !input.root.controls) {
        return null;
      }
      const exactMatch = input.root.controls.password.value === input.value;
      return exactMatch ? null : { mismatchedPassword: true };
    }
  
  createForm() {
      this.registerForm = this.fb.group( {
          userName: ['', Validators.required],
          password: ['', Validators.required],
          rpassword: ['', [Validators.required, this.duplicatePassword]],
          email: ['', Validators.required],
          firstName: [''],
          lastName: ['']
      } );
  }
  get userName(){ return this.registerForm.get('userName'); }
  get password(){ return this.registerForm.get('password'); }
  get rpassword(){ return this.registerForm.get('rpassword'); }
  get email(){ return this.registerForm.get('email'); }
  get firstName(){ return this.registerForm.get('firstName'); }
  get lastName(){ return this.registerForm.get('lastName'); }
  
  ngOnInit() {
  }
  
  register(data) {
      delete data.rpassword;
      if(this.registerForm.valid) {
          this.auth.register(data);
      }
  }

}
