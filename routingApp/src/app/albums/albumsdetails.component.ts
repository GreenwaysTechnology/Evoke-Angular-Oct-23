import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albumsdetails',
  templateUrl: './albumsdetails.component.html',
  styles: [
  ]
})
export class AlbumsdetailsComponent {
  id!: number
  album!: any
  constructor(private activateRoute: ActivatedRoute, private albumService: AlbumsService) { }
  ngOnInit() {
    this.activateRoute.params.subscribe({
      next: params => {
        console.log(params)
        this.id = params['id']
        this.albumService.findAlbumById(this.id).subscribe({
          next: newalbum => {
            this.album = newalbum
          }
        })
      }
    })
  }
}
