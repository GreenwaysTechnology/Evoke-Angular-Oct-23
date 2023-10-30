import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TODOS } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  findAll(): Observable<Array<any>>{
    return of(TODOS)
  }
}
