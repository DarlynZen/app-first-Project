import { Component, Inject, input, output } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/product';

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

  //productService: ProductService;

/*   constructor(@Inject("ProvideProduct") productService: ProductService) {
    this.productService = productService;
  } */

  removeItem(){
    /* const it = this.item();
    if(it){
      this.onRemove.emit(it.id);
      //al remover el item se busca el producto en la lista de productos, si se encuentra se aumenta el stock total 
      const prd = this.productService.productList.find(p => p.id === it.id);
      if (prd) {
        prd.stock += it.quantity;
      }

      console.log('Update product stock:', prd);
      console.log('Current product list:', this.productService.productList);
    } */

      const it = this.item();
      if(it){
        this.onRemove.emit(it.id);
      }
  }
}
