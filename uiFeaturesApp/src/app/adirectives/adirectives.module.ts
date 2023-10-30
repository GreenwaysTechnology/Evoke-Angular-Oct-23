import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { HighlightComponent } from './highlight.component';



@NgModule({
  declarations: [
    HighlightDirective,
    HighlightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    HighlightComponent
  ]
})
export class AdirectivesModule { }
