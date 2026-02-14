import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product: any = {
    id: 0,
    name: 'Sample Product',
    description: 'Product description',
    price: 0,
    image: 'https://via.placeholder.com/400x400'
  };

  @Output() addToCart = new EventEmitter<any>();

  constructor(private router: Router){}

  onAddToCart() {
    this.addToCart.emit(this.product);
    console.log('Added to cart:', this.product.name);
  }

  onProductClick(){
    this.router.navigate(['/product', this.product.id]);
  }
}