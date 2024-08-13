import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    FormsModule,
    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  // a = 10;
  a: any = 10;
  parentName: string = '';

  f1() {
    console.log('I am F1.. From Parent Component')
  }
  receiveDatFromChild(dataFromChild: any) {
    this.parentName = dataFromChild;
  }

  constructor() {
    console.log("Parent constructor")
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
