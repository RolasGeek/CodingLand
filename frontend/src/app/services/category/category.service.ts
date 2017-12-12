import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './../../classes/category';

const url = 'api/category'

@Injectable()
export class CategoryService {
    
    constructor( private http: HttpClient ) {
    }
  
    getAll() : Observable<Array<Category>> {
        return this.http.get(url).map((data : any) =>  {return data});
    }
    get(id)  {
        return this.http.get(url + '/' + id);
    }
    
    insert(data) {
        return this.http.post(url, data);
    }
    
    update(data) {
        return this.http.put(url, data);
    }
    
    delete(id) {
        return this.http.delete(url + '/' + id);
    }
    
    

}
