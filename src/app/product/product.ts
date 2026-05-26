import { Component, input, output } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  //En este caso anteriormente se usaria @Input() y para algun cambio el ngOnChange()
  //product es un input signal de tipo IProduct o undefined
  product = input<IProduct>();
  onAddToCart = output<IProduct>();

  addToCart(product: IProduct) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
    this.onAddToCart.emit(product);
  }

}
