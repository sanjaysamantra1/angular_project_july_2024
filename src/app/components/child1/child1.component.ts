import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a', 'childf1']
})
export class Child1Component {
  a: any;
  childf1: any;
  b: number = 200;
}
