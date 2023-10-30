import { Component } from '@angular/core';
import { GreeterService } from './greeter.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-greeter',
    standalone: true,
    imports: [FormsModule],
    template: `
     <input [(ngModel)]="name" />
      <h1> {{message}} {{name}} </h1>
    `,

})
export class GreeterComponent {
    message!: string
    name!: string
    constructor(private greeterService: GreeterService) { }
    ngOnInit() {
        this.message = this.greeterService.sayGreet()
    }
}
