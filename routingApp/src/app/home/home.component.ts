import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  constructor() {

  }
  ngOnInit() {
    console.log('HomeComponent component is mounted')
  }
  ngOnDestroy() {
    console.log('HomeComponent component unMounted')
  }
}
