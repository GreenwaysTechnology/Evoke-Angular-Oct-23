import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AlbumsComponent } from './albums/albums.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { AlbumsdetailsComponent } from './albums/albumsdetails.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './products/books.component';
import { PhonesComponent } from './products/phones.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  //index route
  // {
  //   path: '', component: HomeComponent
  // },
  //Index route with redirect
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  { path: 'kidsalbums', redirectTo: '/albums', pathMatch: 'full' },
  {
    path: "albums", component: AlbumsComponent
  },
  {
    path: 'albums/:id', component: AlbumsdetailsComponent
  },
  {
    path: "products", component: ProductsComponent,
    children: [
      { path: '', redirectTo: '/products/books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'electronics', component: PhonesComponent }
    ]
  },
  {
    path: 'pagenotfound', component: PagenotfoundComponent
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  {
    path: "**", redirectTo: '/pagenotfound', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
