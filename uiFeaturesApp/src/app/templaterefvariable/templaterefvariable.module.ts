import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplaterefvariableComponent } from './templaterefvariable.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplaterefvariableComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    TemplaterefvariableComponent
  ]
})
export class TemplaterefvariableModule { }
