import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map, fromEvent, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
      ));

    this.exhaustMapDemo();
  }
  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');
    console.log(clicks)
    const result = clicks.pipe(
      exhaustMap(() => this.http.get('https://fakestoreapi.com/products'))
    );
    result.subscribe((x) => console.log(x));
  }
}
