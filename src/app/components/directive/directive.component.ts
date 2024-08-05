import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  num: number = 4;
  dayNumber: number = new Date().getDay();
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Mahindra']
  flag = false;

  addCar() {
    this.cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Mahindra', 'Toyota']
  }

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  ];
  addEmp() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 102, name: 'sita', sal: 9000, gender: 'female' }
    ];
  }
  updateEmp() {
    this.employees[0].sal = 5500;
  }

  myStyle1 = {
    "color": 'purple',
    "border": '5px dotted red'
  }
  myStyle2 = {
    "color": 'blue',
    "border": '5px dotted orange'
  }

  styleToApply() {
    if (this.flag) {
      return this.myStyle1
    } else {
      return this.myStyle2
    }
  }

  applyClasses(){
    if (this.flag) {
      return {'btn':true,'btn-sm':true,'btn-success':true,'btn-dark':false}
    } else {
      return {'btn':true,'btn-lg':true,'btn-danger':true,'btn-sm':false}
    }
  }

}
