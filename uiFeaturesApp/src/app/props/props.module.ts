import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropsComponent } from './props.component';
import { TodosparentComponent } from './todosparent.component';
import { TodoschildComponent } from './todoschild.component';



@NgModule({
  declarations: [
    PropsComponent,
    TodosparentComponent,
    TodoschildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PropsComponent,
    TodosparentComponent,
    TodoschildComponent
  ]
})
export class PropsModule { }
