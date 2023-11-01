import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AppRoutingModule } from '../app-routing.module';
import { BooksComponent } from './books.component';
import { PhonesComponent } from './phones.component';



@NgModule({
  declarations: [
    ProductsComponent,
    BooksComponent,
    PhonesComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    ProductsComponent,
    BooksComponent,
    PhonesComponent
  ]
})
export class ProductsModule { }
