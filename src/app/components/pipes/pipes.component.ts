import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule,
    RemainingPipe, TruncatePipe,MySortPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name = 'sachIn tenDuLkAR';
  mySal = 5000;
  today = new Date();
  user = { name: 'sachin', age: 50, add: 'mumbai' };
  arr = [10, 50, 40, 30, 20];
  msg: string = 'Hello';
  msg2: string = 'good morning';
  longStr: string = 'Hello EveryOne, Good Morning. This is Pipe Session';
  num = 10;
}
