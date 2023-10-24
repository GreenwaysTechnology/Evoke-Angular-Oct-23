import { Injectable } from '@angular/core';
import { TODOS } from './todo.mock';
import { Todo } from './todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor() { }

  //biz api
  public findAll(): Array<Todo> {
    return TODOS
  }

}
