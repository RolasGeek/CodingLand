import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './../../classes/post';

const url = 'api/post'

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(topicId) : Observable<Array<Post>> {
      return this.http.get(url, {params: new HttpParams().set('topicId', topicId)}).map((data: any) => {return data});
  }
  
  getOne(id) : Observable<Post> {
      return this.http.get(url, {params : new HttpParams().set('id', id) }).map((data: any) => {return data});
  }
  
  post(data) {
      return this.http.post(url, data);
  }
  
  update(data) {
     return  this.http.put(url, data);
  }
  
  dalete(id) {
      return this.http.delete(url, {params : new HttpParams().set('id', id)});
  }
}
