import { Component, Input } from '@angular/core';
import { Todo } from './todo.type';

@Component({
  selector: 'app-todoschild',
  templateUrl: './todoschild.component.html',
  styles: [
  ]
})
export class TodoschildComponent {
  @Input()
  title!:string
  @Input()
  todos!:Array<Todo>
}
