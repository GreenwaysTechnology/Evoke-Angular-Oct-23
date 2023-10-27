import { Component } from '@angular/core';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styles: [
  ]
})
export class MyeventsComponent {
  message: string = "..."

  txtInput:string = ""

  //listener method
  onSave(data: any) {
    // alert(data)
    this.message = data
  }
  //input
  // onRead(evt: any) {
  //   //console.log(evt.target.value)
  //   this.txtInput = evt.target.value
  // }
}
