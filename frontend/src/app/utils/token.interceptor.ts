import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor( private router: Router ) {
    }
    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        var token = localStorage.getItem( 'token' );
        var rtoken = localStorage.getItem( 'refresh_token' );
        if ( token ) {
            request = request.clone( {
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    refresh_token: rtoken
                    
                }
            } );
        }
        return next.handle( request ).do(( event: HttpEvent<any> ) => {
            if ( event instanceof HttpResponse ) {
                // do stuff with response if you want
            }
        }, ( err: any ) => {
            if ( err instanceof HttpErrorResponse ) {
                if ( err.status === 401 ) {
                    this.router.navigate( ['/'] );
                }
            }
        } );
    }
}