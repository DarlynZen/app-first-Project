import { Component, computed, Inject, input, output, Signal } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { CartItem } from '../cart-item/cart-item';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  productService: ProductService;
  productListCart: Signal<(IProduct & {quantity: number})[]>;

  //funcion signal que devuelve un valor, se ejecuta si es que 1 o mas de los signals que contienen la funciona han sido modificados
  total = computed(() => {
    return this.productListCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  constructor(@Inject("ProvideProduct") productService: ProductService) {
    this.productService = productService;
    this.productListCart = this.productService.itemsInCart;
  }

  removeItem(productId: number) {
    this.productService.removeFromCart(productId);
  }


}