import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    const url = 'https://jsonplaceholder.typicode.com/albums'
    return this.http.get<any[]>(url);
  }
  //findAlbum 
  findAlbumById(id: number):Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`
    return this.http.get<any>(url);
  }
}
