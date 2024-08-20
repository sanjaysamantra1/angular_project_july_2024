import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee, IEmployee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getAllEmplpoyees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response)
      }
    )
  }
}
