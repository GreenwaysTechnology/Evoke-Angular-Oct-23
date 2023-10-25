import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post.type';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts!: Post[]
  constructor(private postService: PostsService) { }
  async ngOnInit() {
    // this.posts = this.postService.findAll()
    // this.postService.findAll((posts: Post[]) => {
    //     this.posts = posts
    // });
    // this.postService.findAll().then(posts => {
    //   this.posts = posts
    // }).catch(err => {
    //   console.log(err)
    // })
    try {
      this.posts = await this.postService.findAll()
    }
    catch(err){
      console.log(err)
    }
  }
  ngOnDestroy() {
    console.log('Destory is called')
  }
}
