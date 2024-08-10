import { Component } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoryItemComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  allCategories = [
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery1', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery2', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery3', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery4', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery6', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery7', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery8', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
  ]
}
