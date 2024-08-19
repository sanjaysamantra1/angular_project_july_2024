import { Component } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments: any;
  constructor(private commentService: CommentService) {
  }
  ngOnInit() {
    this.commentService.fetchComments().subscribe((response: any) => {
      this.comments = response;
    })
  }
}
