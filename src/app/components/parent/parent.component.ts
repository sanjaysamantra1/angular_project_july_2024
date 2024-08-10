import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  inputs: ['a']
})
export class ParentComponent {
  // a = 10;
  a: any;
  parentName: string = '';

  f1() {
    console.log('I am F1.. From Parent Component')
  }
  receiveDatFromChild(dataFromChild: any) {
    this.parentName = dataFromChild;
  }
}
