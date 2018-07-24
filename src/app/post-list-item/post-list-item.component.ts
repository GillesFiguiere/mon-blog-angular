import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postContent: Post;

  constructor() {
    this.postContent = new Post();
   }

  ngOnInit() {
  }

  onLike() {
    this.postContent.loveIts++;
  }

  onDislike() {
    this.postContent.loveIts--;
  }

}
