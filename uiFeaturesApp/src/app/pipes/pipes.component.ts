import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

const posts = [{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}]

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent {
  name: string = "subramanian"
  price: number = 199232323
  today: any = new Date()
  stockvalue: number = 1923
  customer = {
    id: 1,
    name: 'Subramanian',
    address: {
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      country: 'India'
    }
  }
  posts: Observable<Array<any>> = of(posts)
  // posts!: Array<any>
  ngOnInit() {
    // this.tmpposts.subscribe({
    //   next: posts => {
    //     this.posts = posts
    //   }
    // })
  }
}
