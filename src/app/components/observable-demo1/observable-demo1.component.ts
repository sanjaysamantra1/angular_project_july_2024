import { CommonModule } from '@angular/common';
import { afterNextRender, Component } from '@angular/core';
import { filter, from, interval, map, Observable, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  numbers: any;
  numbers_5: any;
  allSubscriptions: any = [];

  constructor() {
    afterNextRender({
      write: () => {
        this.numbers = interval(1000);
        this.numbers_5 = this.numbers.pipe(take(5));

        let subscriber = this.numbers.subscribe((ele: any) => console.log(ele))
        this.allSubscriptions.push(subscriber)
      }
    });
  }

  ngOnInit() {
    // publisher
    let publisher1 = new Observable((observer) => {
      observer.next('AAAAA');
      observer.next('BBBBB');
      observer.next('CCCCC');
      observer.next('DDDDD');
      observer.complete();
    });
    /* let subscriber1 = publisher1.subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (data) => { console.log(data) },
      complete: () => { console.log('all data received') }
    }); */

    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsPublisher = from(cars);
    let carsSubscriber = carsPublisher.subscribe((val) => console.log(val));
    this.allSubscriptions.push(carsSubscriber);

    let nums = range(1, 10);
    let numsSubscriber = nums.subscribe((val) => console.log(val));
    this.allSubscriptions.push(numsSubscriber);

    let even_nums = nums.pipe(filter((ele) => ele % 2 == 0));
    even_nums.subscribe((val) => console.log(val));

    let square = nums.pipe(map((ele) => ele * ele));
    square.subscribe((val) => console.log(val));
  }

  ngOnDestroy() {
    console.log(this.allSubscriptions);
    for (let ele of this.allSubscriptions) {
      ele.unsubscribe();
    }
  }
}
