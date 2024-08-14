import { Component, EventEmitter, Input } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild', 'child1'], // angular 5
  outputs: ['nameEvent']
})
export class Child2Component {
  aChild: any;
  child1: any;
  nameEvent = new EventEmitter();

  name: string = 'Sachin Tendulkar';

  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }

  ngOnInit() {
    console.log('Child-2 initialized');

    // interval(1000).subscribe((val) => cosnsole.log(val));

    // setInterval(console.log, 1000, "I am an Interval from child-2")
  }
  ngOnDestroy() { // clean up code - cleartimeout, unsubscribe
    console.log("child-2 is about to be destroyed")
  }
} 
