import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private lastOrder: any = null;

  constructor() { }

  createOrder(orderData: any) {
    this.lastOrder = {
      ...orderData,
      orderNumber: this.generateOrderNumber(),
      orderDate: new Date(),
      status: 'confirmed'
    };
    
    console.log('Order created:', this.lastOrder);
    return this.lastOrder;
  }

  getLastOrder() {
    return this.lastOrder;
  }
  
  //mockup order
  private generateOrderNumber(): string {
    return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}