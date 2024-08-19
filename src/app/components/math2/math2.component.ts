import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  public mathObj: any;

  constructor() {
    this.mathObj = inject(MathService);
    // this.mathObj = new MathService(); // not recomended
    console.log(`PI value from service is ${this.mathObj.PI}`)
  }
  changePIValue() {
    this.mathObj.PI = 5.123;
  }
}
