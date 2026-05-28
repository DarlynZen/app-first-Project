import { Component, Inject, input, output, WritableSignal } from '@angular/core';
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

/*   //el input es obligatorio
  cart = input<(IProduct & {quantity: number})[]>();
  //una salida 
  onRemove = output<number>();

  removeItem(productId: number){
    this.onRemove.emit(productId);
  } */

  productService: ProductService;
  cart: WritableSignal<(IProduct & {quantity: number})[]>;
  
  constructor(@Inject("ProvideProduct") productService: ProductService) {
    this.productService = productService;
    this.cart = this.productService.cart;
  }

  removeItem(productId: number) {
    this.productService.removeFromCart(productId);
  }
}
