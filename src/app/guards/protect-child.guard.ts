import { CanActivateChildFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const protectChildGuard: CanActivateChildFn = (childRoute, state) => {
  const user = inject(UserService);
  if (user.getMyRole() === 'teacher') {
    return true;
  } else {
    alert('Sorry, You dont have access to this route')
    return false;
  }
};
