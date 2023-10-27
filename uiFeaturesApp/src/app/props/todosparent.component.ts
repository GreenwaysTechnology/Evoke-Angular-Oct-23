import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.type';

@Component({
  selector: 'app-todosparent',
  templateUrl: './todosparent.component.html',
  styles: [
  ]
})
export class TodosparentComponent {
  title: string = "Todo App"
  todos!: Array<Todo>
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todoService.findAll().subscribe({
      next: todos => {
        this.todos = todos;
      }
    })
  }
}
