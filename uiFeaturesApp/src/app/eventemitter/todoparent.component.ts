import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../props/todo.type';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todoparent',
  templateUrl: './todoparent.component.html',
  styles: [
  ]
})
export class TodoparentComponent {

  constructor(private todoService:TodoService){}
  
   todo!:Todo

  //Listener listens for child events
  public getTodo(evt:Todo){
     console.log(evt)
     this.todo = evt
     this.todoService.save(this.todo);
  }
}
