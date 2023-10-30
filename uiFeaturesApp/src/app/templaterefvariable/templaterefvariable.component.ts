import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templaterefvariable',
  templateUrl: './templaterefvariable.component.html',
  styles: [
  ]
})
export class TemplaterefvariableComponent {
  onSubmit(form: NgForm) {
    console.log(form)
  }
  phoneNo!: any
  callPhone(value: any) {
    this.phoneNo = value
  }
}
