import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {
  constructor(private router: Router) { }

  goToAlbumPage() {
    this.router.navigate(['albums'])
  }
  goToProductsPage() {
    this.router.navigate(['products'])
  }
}
