import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    // this.zipDemo();
    // this.fetchDataFromMultipleAPIs();
    // this.withoutMergeMap();
    // this.mergeMapDemo();
    this.concatMapDemo();
  }
  concatMapDemo() {
    let usersPublisher = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    let usersSubscriber2 = usersPublisher.pipe(
      concatMap((user) => {
        const url = `https://jsonplaceholder.typicode.com/users/${user}`;
        return this.httpClient.get(url); //inner observable
      })
    ).subscribe((userData) => {
      console.log(userData);
    });
  }
  mergeMapDemo() {
    let usersPublisher = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    let usersSubscriber2 = usersPublisher.pipe(
      mergeMap((user) => {
        const url = `https://jsonplaceholder.typicode.com/users/${user}`;
        return this.httpClient.get(url); //inner observable
      })
    ).subscribe((userData) => {
      console.log(userData);
    });
  }

  withoutMergeMap() {
    let usersObservable = of(1, 2, 3, 4);
    usersObservable.subscribe((user) => {
      console.log(user);
      const url = `https://jsonplaceholder.typicode.com/users/${user}`
      let userDetailObservable = this.httpClient.get(url);
      userDetailObservable.subscribe((userDetails) => {
        console.log(userDetails)
      })
    });
  }
  fetchDataFromMultipleAPIs() {
    let userNames = ['sanjaysamantra1', 'rajeswarguda', 'gnraju20411', 'MahammadAliShaik'];
    let requests = userNames.map(userName => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`)
    });
    forkJoin(requests).subscribe((responses) => {
      console.log(responses);
    });
  }
  zipDemo() {
    let names = of('sanjay', 'anil', 'rudra', 'aditya');
    let ages = of(30, 40, 50, 60);
    let addresses = of('bangalore', 'hyderabad', 'delhi', 'pune');
    let finalObs = zip([names, ages, addresses]);

    finalObs.subscribe((data) => {
      console.log(data); // [response[0][0] , response[1][0] , response[2][0]]
    })
  }
}
