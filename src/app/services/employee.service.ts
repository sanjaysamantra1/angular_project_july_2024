import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee, IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmplpoyees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').pipe(
      map((response: Employee[]) => {
        const employeeArr = response.map((obj) => new Employee(obj.id, obj.firstName, obj.lastName, obj.sal, obj.email));
        return employeeArr;
      })
    );
    // return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  }
}
