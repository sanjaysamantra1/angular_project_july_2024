import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';

export const productDetailsResolver: ResolveFn<Object> = (route, state) => {
  const id = +route.params['id'];
  return inject(ProductService).getProductDetails(id);
};
