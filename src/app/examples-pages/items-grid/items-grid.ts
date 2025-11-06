import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import ProductList from './product-list.json';

@Component({
  selector: 'app-items-grid',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './items-grid.html',
  styleUrl: './items-grid.css',
})
export class ItemsGrid  implements OnInit {
  products: Product[] = []

  ngOnInit() {
    this.products = ProductList
  }
}

export interface Product {
  description: string;
  imageSrc: string;
  name: string;
  price: string,
  productId: string,
  url?: string;
}
