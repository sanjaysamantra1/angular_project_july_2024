import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name = 'Sachin Tendulkar';
  img_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0CuKsnxGuq6Fd5AFYt8uaXUwzVbNj5SnGShe5g47-xSU6_713C4KOCTdxy8Njdjz5BY&usqp=CAU';
  flag = false;
  userId = 1;
  msg: string = '';
  selectedState: string = 'Odisha';
  colspanValue = 2;
  myWidth = '50%';

  toggleMode() {
    this.flag = !this.flag;
    if (this.flag) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }


  toggleFlag() {
    this.flag = !this.flag;
  }

  f1() {
    console.log('F1........')
  }
  changeName() {
    this.name = 'Sourav Ganguly';
    this.userId = 10;
  }
  onUserIdChange(evt: any) {
    console.log(evt);
    // on user id changed , get the details of the updated userid and display on the screen
  }
  userIdChanged() {
    console.log(this.userId, 'second')
  }
}
