import { Component } from '@angular/core';
import * as data from './products.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  allProducts = (data as any).default;
  filteredProducts = (data as any).default;

  sortByAsc() {
    Swal.fire('Sort Ascending', 'The Products ll be sorted in Ascending order', 'info')
    this.allProducts.sort((prod1: any, prod2: any) => prod1.price - prod2.price);
  }
  sortByDesc() {
    new Snackbar('Hellloo, I am a snackBar', {
      position: 'top-center',
      timeout: 3000,
      theme: 'light'
    });
    this.allProducts.sort((prod1: any, prod2: any) => prod2.price - prod1.price);
  }

  searchProducts(searchText: string) {
    this.filteredProducts = this.allProducts.filter((prod: any) => {
      return JSON.stringify(prod).includes(searchText);
    })
    console.log(this.filteredProducts)
  }



  p: any;


  constructor() {

  }
  ngOnInint(){
  }
}
