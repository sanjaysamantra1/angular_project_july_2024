import { Component } from '@angular/core';
import * as data from './products.json';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  myProducts = (data as any).default;

  p:any;
}
