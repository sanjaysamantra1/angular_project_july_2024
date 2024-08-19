import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {

  constructor(public mathService: MathService) {

  }
  ngOnInit() {
    let a = 10;
    let b = 20;
    let addResult = this.mathService.add(a, b);
    let mulResult = this.mathService.mul(a, b);
    console.log(`Addition of ${a} and ${b} is ${addResult}`)
    console.log(`Multipliation of ${a} and ${b} is ${mulResult}`)
    console.log(`PI value from service is ${this.mathService.PI}`)
  }
}
