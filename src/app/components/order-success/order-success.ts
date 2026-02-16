import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-success.html',
  styleUrls: ['./order-success.css']
})
export class OrderSuccess implements OnInit {
  order: any = null;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.order = this.orderService.getLastOrder();
    
    if (!this.order) {
      this.router.navigate(['/']);
    }
  }

  continueShopping() {
    this.router.navigate(['/']);
  }
}