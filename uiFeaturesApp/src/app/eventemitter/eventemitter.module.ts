import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventemitterComponent } from './eventemitter.component';
import { TodoparentComponent } from './todoparent.component';
import { TodochildComponent } from './todochild.component';



@NgModule({
  declarations: [
    EventemitterComponent,
    TodoparentComponent,
    TodochildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EventemitterComponent,
    TodoparentComponent,
    TodochildComponent
  ]
})
export class EventemitterModule { }
