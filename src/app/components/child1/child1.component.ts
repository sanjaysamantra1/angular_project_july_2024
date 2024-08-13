import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a', 'childf1']
})
export class Child1Component {
  a: any;
  childf1: any;
  b: number = 200;

  f2(){
    console.log('I am f2 from child1')
  }

  constructor() {
    console.log('child constructor');
  }
  ngOnChanges(myChanges: SimpleChanges) {
    console.log('child ngOnChanges');
    console.log(myChanges)
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
