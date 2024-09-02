import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  if (user.getMyRole() === 'teacher') {
    return true;
  } else {
    alert('Sorry, YOu dont have access to this route')
    return false;
  }
};
