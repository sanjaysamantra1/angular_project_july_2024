import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService); // this code gets executed during the req is sent
  return next(req).pipe(catchError((error) => {
    toastService.showError(error.message); // this code is executed during the response is recived
    return EMPTY;
  }));
};
