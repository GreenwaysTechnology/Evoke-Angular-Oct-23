import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
// import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    TodosComponent
  ],
  // providers:[TodosService],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
