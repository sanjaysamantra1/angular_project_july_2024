import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  users: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.fetchDemo();
    this.asyncAwaitDemo();
  }

  fetchDemo() {
    let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
    userPromise.then(
      (response) => {
        let jsonPromise = response.json();
        jsonPromise.then(
          (finalData) => { console.log(finalData) },
          (err) => { console.log(err) },
        );
      },
      (err) => {
        console.log(err)
      }
    )
  }

  async asyncAwaitDemo() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let finalResponse = await response.json();
      console.log(finalResponse)
    } catch (err) {
      console.log(err)
    }
  }

  fetchUsers() {
    let userObservable = this.httpClient.get('https://jsonplaceholder.typicode.com/users', { observe: 'body' });
    userObservable.subscribe(
      (response) => {
        console.log('Next method')
        console.log(response);
        this.users = response;
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log('all data received')
      }
    )
  }

}
