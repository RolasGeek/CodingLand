import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './../../classes/user';

@Injectable()
export class AuthService {
    user: User = new User();
    error: boolean;
    success: boolean;
    constructor( private http: HttpClient, private router: Router ) {
    }



    public refnesh() {
        if ( this.isLoggedIn() ) {
            console.log(localStorage.getItem( 'username' ) );
            return this.get( localStorage.getItem( 'username' ) ).subscribe(( data: any ) => this.user = data );
        }
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem( 'token' ) ? true : false;
    }

    login( username: string, password: string ) {
        return this.http.get( 'api/auth/login', { params: new HttpParams().set( 'username', username ).set( 'password', password ) } )
            .subscribe(( data: any ) => {
                if ( data !== null ) {
                    localStorage.setItem( 'token', data.token );
                    localStorage.setItem( 'username', data.username );
                    this.router.navigate( ['/'] );
                    this.refnesh();
                } else {
                    this.error = true;
                }
            } );

    };


    register( user ) {
        return this.http.post( 'api/auth', user ).subscribe((data:any) => { this.success = data == 1; this.error = data == 2; });
    }

    public get( username ) {
        return this.http.get( 'api/auth', { params: new HttpParams().set( 'username', username ) } );
    }

    public logout() {
        localStorage.clear();
    }

}
