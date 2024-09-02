import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.activatedRoute);

    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
}
