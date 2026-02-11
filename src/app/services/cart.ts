import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  
  cartItems$ = this.cartItemsSubject.asObservable();
  constructor() { }

  getCartItems() {
    return this.cartItemsSubject.value;
  }

  addToCart(product: any) {
    const currentItems = this.cartItemsSubject.value;
    
    const existingItem = currentItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
      this.cartItemsSubject.next([...currentItems]);
    } else {
      this.cartItemsSubject.next([...currentItems, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(updatedItems);
  }

  getTotalPrice(): number {
    return this.cartItemsSubject.value.reduce((total, item) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);
  }

  getTotalItems(): number {
    return this.cartItemsSubject.value.reduce((total, item) => {
      return total + (item.quantity || 1);
    }, 0);
  }
  
  clearCart() {
    this.cartItemsSubject.next([]);
  }
}