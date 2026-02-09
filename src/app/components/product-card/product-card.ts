import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product: any = {
    name: 'Sample Product',
    description: 'Product description',
    price: 0,
    image: 'https://via.placeholder.com/400x400'
  };

  @Output() addToCart = new EventEmitter<any>();

  onAddToCart() {
    this.addToCart.emit(this.product);
    console.log('Added to cart:', this.product.name);
  }
}