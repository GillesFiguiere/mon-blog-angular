import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post>;

  /*
  @Input() newPostTitle: string;

  @Input() newPostContent: string;
  */

  constructor(){
    this.posts = new Array<Post>();
  }

  onPost(newPostTitle, newPostContent){
    let newPostToAdd = new Post();

    console.log("Title : " + newPostTitle);

    newPostToAdd.title = newPostTitle;
    newPostToAdd.content = newPostContent;

    this.posts.push(newPostToAdd);

    console.log(this.posts.length);
  }
}
