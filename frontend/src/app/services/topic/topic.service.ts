import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Topic } from './../../classes/topic';

const url = 'api/topic/'

@Injectable()
export class TopicService {
    
    constructor( private http: HttpClient ) {
    }
    
    getAll(number){
        return this.http.get(url+ '0',  {params: new HttpParams().set( 'categoryId' , number)});
    }
    
    get(id) : Observable<Topic> {
        return this.http.get(url+ id ).map((data :any)  => {return data;});
    }
    
    delete(id) {
        return this.http.delete(url+ id);
    }
    
    update(values) {
        return this.http.put(url, values);
    }
    
    post(values) {
        return this.http.post(url, values);
    }
}
