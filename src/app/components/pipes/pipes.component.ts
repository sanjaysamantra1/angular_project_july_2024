import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, RemainingPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name = 'sachIn tenDuLkAR';
  mySal = 5000;
  today = new Date();
  user = { name: 'sachin', age: 50, add: 'mumbai' };
  arr = [10, 20, 30, 40, 50, 60, 70];
  msg: string = 'Hello';
  msg2: string = 'good morning';
}
