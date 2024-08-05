import { Component } from '@angular/core';
import * as data from './users.json';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = (data as any).default;
  isTableView: boolean = true;
  str: string = 'Helloooooo';
  myMap:any;

  constructor(){
    this.myMap = new Map();
    this.myMap.set('sanjay',5000)
    this.myMap.set('deepak',6000)
    this.myMap.set('sita',6500)
  }
 
}
