import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  standalone: true,
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css'
})
export class SubjectDemo1Component {
  ngOnInit() {
    // this.subjectDemo()
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
  subjectDemo() {
    let mySubject = new Subject();
    mySubject.next('AAAAA');
    let subscriber1 = mySubject.subscribe(val => console.log('subscriber-1 ', val));
    mySubject.next('BBBBB');
    let subscriber2 = mySubject.subscribe(val => console.log('subscriber-2 ', val));
    mySubject.next('CCCCC');
    mySubject.next('DDDDD');
  }
  behaviourSubjectDemo() {
    let mySubject = new BehaviorSubject('Initial data');
    mySubject.next('AAAAA');
    let subscriber1 = mySubject.subscribe(val => console.log('subscriber-1 ', val));
    mySubject.next('BBBBB');
    let subscriber2 = mySubject.subscribe(val => console.log('subscriber-2 ', val));
    mySubject.next('CCCCC');
    mySubject.next('DDDDD');
  }
  replaySubjectDemo() {
    let mySubject = new ReplaySubject();
    mySubject.next('AAAAA');
    let subscriber1 = mySubject.subscribe(val => console.log('subscriber-1 ', val));
    mySubject.next('BBBBB');
    let subscriber2 = mySubject.subscribe(val => console.log('subscriber-2 ', val));
    mySubject.next('CCCCC');
    mySubject.next('DDDDD');
  }
  asyncSubjectDemo() {
    let mySubject = new AsyncSubject();
    mySubject.next('AAAAA');
    let subscriber1 = mySubject.subscribe(val => console.log('subscriber-1 ', val));
    mySubject.next('BBBBB');
    let subscriber2 = mySubject.subscribe(val => console.log('subscriber-2 ', val));
    mySubject.next('CCCCC');
    mySubject.next('DDDDD');
    mySubject.complete();
  }
}
