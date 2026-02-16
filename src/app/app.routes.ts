import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';
import { ProductDetail } from './components/product-detail/product-detail';
import { Checkout } from './components/checkout/checkout';
import { OrderSuccess } from './components/order-success/order-success';


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
  },
  {
    path: 'checkout',
    component: Checkout
  },
  {
    path: 'order-success',
    component: OrderSuccess
  }
];