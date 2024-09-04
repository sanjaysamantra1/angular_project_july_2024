import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products')
  }
  getProductDetails(id: number) {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.httpClient.get(url);
  }
}
