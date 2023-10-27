import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyeventsComponent } from './myevents.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyeventsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    MyeventsComponent
  ]
})
export class EventsModule { }
