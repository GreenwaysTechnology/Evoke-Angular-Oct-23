import { Component } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo.type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    //declare variable which is going to hold data
    todos:Array<Todo>=[]
    //tmpTodos:any

    constructor(private todosService:TodosService){
      // console.log(this.todosService.findAll())
      this.todos = this.todosService.findAll()
      //this.tmpTodos = JSON.stringify(this.todos);
    }
}
