import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  flag: boolean = false;
  cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota']

}
