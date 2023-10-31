import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Hero } from "./hero";

@Component({
    selector: 'app-hero-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './hero-form.component.html',
    styleUrls: ['./app.component.css']
})
export class HeroFormCompoent {
    //Create Model class
    powers = ['Really Smart', 'Super Flexible', 'Supert Hot', 'Weather Chanager'];
    model = new Hero(1, 'Dr.Strange', this.powers[3], 'Chuck OverStreet')
    submitted: boolean = false

    onSubmit() {
        console.log(this.model)
        this.submitted = true
    }
    newHero() {
        this.model = new Hero(234, '', this.powers[0], '')
    }
}