import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  flag: boolean;
  constructor(private user: UserService) {
    this.flag = this.user.getMyRole() === 'teacher';
  }
}
