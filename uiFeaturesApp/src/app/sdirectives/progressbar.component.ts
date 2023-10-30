import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styles: [
  ]
})
export class ProgressbarComponent {
  todos!: Array<any>
  laoder: boolean = true
  status: string = "loading...."

  constructor(private todoService: TodoService) { }
  ngOnInit() {
    //Todo:Remove the timer once the testing over:
    this.todoService.findAll().subscribe({
      next: todos => {
        setTimeout(() => {
          this.todos = todos
          this.laoder = !this.laoder
        }, 10000);
      }
    })
  }
}
