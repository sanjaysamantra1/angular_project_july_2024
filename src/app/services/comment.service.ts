import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  fetchComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    return this.httpClient.get(url);
    // returns an observable
  }
}
