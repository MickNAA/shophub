import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product/:id',
    component: ProductDetail
  }
];