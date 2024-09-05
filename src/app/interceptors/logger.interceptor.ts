import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('I am Logger Interceptor', req)
  return next(req);
};
