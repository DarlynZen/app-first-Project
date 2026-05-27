import { Component, input, output } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  //va a recibir un producto con una cantidad
  item = input.required<(IProduct & {quantity: number})>();
  //se enviara una salida con un valor de dato numero, que sera el id
  onRemove = output<number>();

  removeItem(){
    const it = this.item();
    if(it){
      this.onRemove.emit(it.id);
    }
  }
}
