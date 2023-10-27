import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent {
  logo: string = "favicon.ico"
  isEnabled:boolean = true
  isHidden:boolean = false 
}
