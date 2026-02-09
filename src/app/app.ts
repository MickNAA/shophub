import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  cartItems: any[] = [];
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
    }
  ];

  handleAddToCart(product: any){
    this.cartItems.push(product);
    console.log('Cart updated:', this.cartItems);
    console.log('Total items:', this.cartItems.length);
  }
}