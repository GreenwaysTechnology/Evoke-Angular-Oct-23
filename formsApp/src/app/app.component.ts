import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormCompoent } from './hero-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeroFormCompoent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsApp';
}
