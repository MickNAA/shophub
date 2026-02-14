import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  cartItemCount = 0;
  products: any[] = [];

  constructor(
    private cartService: CartService,
    private ProductService: ProductService,
    private router: Router
  ) {
    this.cartService.cartItems$.subscribe(() => {
      this.cartItemCount = this.cartService.getTotalItems();
    });
  }

  ngOnInit() {
    this.products = this.ProductService.getAllProducts();
  }

  handleAddToCart(product: any) {
    this.cartService.addToCart(product);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}