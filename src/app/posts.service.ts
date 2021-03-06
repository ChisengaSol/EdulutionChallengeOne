import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operators/map';
//import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getAllPosts(){
    // return this.http.get('/posts/').pipe(map((posts) => {
    //   return posts;
    // }))
    return this.http.get('/routes/posts/').pipe(map((posts) => {
      return posts;
    }))
  }
}
