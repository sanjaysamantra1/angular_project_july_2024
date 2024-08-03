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
  num: number = 5;
  dayNumber: number = new Date().getDay();
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Mahindra']

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

}
