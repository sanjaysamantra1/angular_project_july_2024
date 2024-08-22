import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Data fetching starts here');// req interceptor
  // show loading icon

  return next(req).pipe(
    finalize(() => {
      console.log('API call got completed'); // response interceptor
      // hide loading icon
    })
  );
};
