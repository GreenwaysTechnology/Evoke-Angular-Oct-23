import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from 'rxjs'
import { Todo } from './todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    //talk to back end service
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Todo[]>(url).pipe(
      catchError(this.handleError<Todo[]>('fetchTodos', [{ userId: 1, id: 1, title: 'todo', completed: false }]))
    )
  }
  //private method
  //handle error Api
  private handleError<T>(operation = 'operation', result?: T) {
    //return function
    return (error: any): Observable<T> => {
      console.log(error)
      return of(result as T)
    }
  }
}
