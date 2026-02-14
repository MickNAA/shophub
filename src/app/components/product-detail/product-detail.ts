import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product: any = null;
  relatedProducts: any[] = [];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      const productId = +params['id'];
      this.loadProduct(productId);
      }
    )
  }

  loadProduct(id: number) {
    this.product = this.productService.getProductById(id);
    
    if (!this.product) {
      this.router.navigate(['/']);
      return;
    }

    this.relatedProducts = this.productService
      .getProductsByCategory(this.product.category)
      .filter(p => p.id !== id)
      .slice(0, 3);
  }

  addToCart() {
    for (let i = 0; i < this.quantity; i++) {
      this.cartService.addToCart(this.product);
    }
    alert(`Added ${this.quantity} ${this.product.name}(s) to cart!`);
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}
