import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Topic } from './../../classes/topic';

const url = 'api/topic'

@Injectable()
export class TopicService {
    
    constructor( private http: HttpClient ) {
    }
    
    getAll(number) : Observable<Array<Topic>> {
        return this.http.get(url,  {params: new HttpParams().set( 'categoryId' , number)}).map((data :any)  => {return data;});
    }
    
    get(id) : Observable<Topic> {
        return this.http.get(url, {params: new HttpParams().set( 'id' , id)}).map((data :any)  => {return data;});
    }
    
    delete(id) {
        return this.http.delete(url, {params:new HttpParams().set( 'id' , id) });
    }
    
    update(values) {
        return this.http.put(url, values);
    }
    
    post(values) {
        return this.http.post(url, values);
    }
}
