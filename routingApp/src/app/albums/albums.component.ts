import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent {
  albums!: Observable<any[]>
  constructor(private albumService: AlbumsService) { }
  ngOnInit() {
    this.albums = this.albumService.findAll();
  }
  ngOnDestroy() {
    // subscribeer.unsubscribe()
  }
}
