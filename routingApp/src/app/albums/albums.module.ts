import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsdetailsComponent } from './albumsdetails.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsdetailsComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports: [
    AlbumsComponent,
    AlbumsdetailsComponent
  ]
})
export class AlbumsModule { }
