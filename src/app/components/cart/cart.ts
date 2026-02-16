import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(
    private CartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.CartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.CartService.getTotalPrice();
    });
  }

  removeItem(productId: number) {
    this.CartService.removeFromCart(productId);
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your entire cart?')) {
      this.CartService.clearCart();
    }
  }

  continueShopping() {
    this.router.navigate(['/']);
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}