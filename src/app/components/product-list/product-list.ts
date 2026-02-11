import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  cartItemCount = 0;

  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling headphones with 30-hour battery life',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking, heart rate monitor, and smartphone notifications',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      description: 'Water-resistant backpack with USB charging port and laptop compartment',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      description: 'Portable waterproof speaker with 12-hour battery and deep bass',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking and long battery life',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop'
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.cartService.cartItems$.subscribe(() => {
      this.cartItemCount = this.cartService.getTotalItems();
    });
  }

  handleAddToCart(product: any) {
    this.cartService.addToCart(product);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}