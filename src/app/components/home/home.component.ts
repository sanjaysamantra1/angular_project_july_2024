import { Component } from '@angular/core';
import { LargeComponent } from '../large/large.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LargeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
