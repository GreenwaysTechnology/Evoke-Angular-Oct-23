import { Injectable } from '@angular/core';
import { POSTS } from './post.mock';
import { Post } from './post.type';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  //blocking api
  // public findAll(): Post[] {
  //   return POSTS
  // }
  //non blocking api using timer
  // public findAll(callback: Function) {
  //   setTimeout(callback, 5000, POSTS)
  // }
  // public findAll(): Promise<Post[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, 5000, POSTS)
  //   })
  // }

  //  public findAll():Observable<Post[]>{
  //     return of(POSTS)
  //  }
  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError(this.handleError<Post[]>('fetch posts...', [
        { userId: 0, id: 0, title: 'title', body: 'body' }
      ]))
    )
  }

  //Error handler api
  private handleError<T>(operation = 'operation', result?: T) {
    //return function 
    return (error: any): Observable<T> => {
      console.log(operation, result)
      return of(result as T)
    }
  }

}
