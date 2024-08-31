import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      const id = +data['id'];
      this.httpClient.get(`https://fakestoreapi.com/products/${id}`).subscribe((result: any) => {
        this.product = result;
      })
    })
  }
}
