import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent {
  constructor() {

  }
  ngOnInit() {
    console.log('ContactComponent component is mounted')
  }
  ngOnDestroy() {
    console.log('ContactComponent component unMounted')
  }
}
