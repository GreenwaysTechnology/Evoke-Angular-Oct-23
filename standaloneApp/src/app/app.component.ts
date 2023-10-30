import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter/greeter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,GreeterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standaloneApp';
}
