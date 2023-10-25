import { Injectable } from '@angular/core';
import { POSTS } from './post.mock';
import { Post } from './post.type';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  //blocking api
  // public findAll(): Post[] {
  //   return POSTS
  // }
  //non blocking api using timer
  // public findAll(callback: Function) {
  //   setTimeout(callback, 5000, POSTS)
  // }
  public findAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 5000, POSTS)
    })
  }
}
