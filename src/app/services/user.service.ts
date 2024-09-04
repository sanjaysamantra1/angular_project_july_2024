import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  role = 'teacher';

  constructor(private http: HttpClient) { }

  findUserByEmail(email: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
  }

  getMyRole() {
    return this.role;
  }
}
