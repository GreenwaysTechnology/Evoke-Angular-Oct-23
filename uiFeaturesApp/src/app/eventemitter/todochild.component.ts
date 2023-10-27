import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../props/todo.type';

@Component({
  selector: 'app-todochild',
  templateUrl: './todochild.component.html',
  styles: [
  ]
})
export class TodochildComponent {
  //event Emitter Object
  @Output()
  onTodoSendRequest = new EventEmitter<Todo>

  //button listener to send todo to parent
  onSendTodo(){
    let todo:Todo = {
      userId:10000,
      id:33333,
      title:'Learn Angular',
      completed:false
    }
    this.onTodoSendRequest.emit(todo);
  }
}
