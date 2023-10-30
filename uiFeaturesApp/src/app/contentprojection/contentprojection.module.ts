import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentprojectionComponent } from './contentprojection.component';
import { AppheaderComponent } from './appheader.component';
import { ApptitleComponent } from './apptitle.component';



@NgModule({
  declarations: [
    ContentprojectionComponent,
    AppheaderComponent,
    ApptitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentprojectionComponent,
    AppheaderComponent,
    ApptitleComponent
  ]
})
export class ContentprojectionModule { }
