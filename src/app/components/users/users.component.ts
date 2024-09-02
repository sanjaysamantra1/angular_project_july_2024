import { Component } from '@angular/core';
import * as data from './users.json';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  selectedUser:any;
  
  // users = (data as any).default;
  isTableView: boolean = true;
  str: string = 'Helloooooo';
  myMap: any;
  users: any;

  constructor(private http: HttpClient) {
    this.myMap = new Map();
    this.myMap.set('sanjay', 5000)
    this.myMap.set('deepak', 6000)
    this.myMap.set('sita', 6500)
  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((response: any) => {
      this.users = response;
    })
  }

}
