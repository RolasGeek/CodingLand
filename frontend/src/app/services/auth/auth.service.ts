import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './../../classes/user';

const url = 'api/auth/'

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
            return this.me().subscribe(( data: any ) => this.user = data );
        }
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem( 'token' ) ? true : false;
    }

    login( username: string, password: string ) {
        var data = new User();
        data.userName = username;
        data.password = password;
        return this.http.post( 'api/auth/login', data)
            .subscribe(( data: any ) => {
                if ( data !== null ) {
                    localStorage.setItem( 'token', data.token );
                    localStorage.setItem( 'refresh_token', data.refresh_token);
                    this.router.navigate( ['/'] );
                    this.refnesh();
                } else {
                    this.error = true;
                }
            } );

    };


    register( user ) {
        return this.http.post( url, user ).subscribe((data:any) => { this.success = data == 1; this.error = data == 2; });
    }

    public get( username ) {
        return this.http.get( url + username);
    }
    
    public me() {
        return this.http.get( url + 'me');
    }
    
    

    public logout() {
        localStorage.clear();
    }

}
