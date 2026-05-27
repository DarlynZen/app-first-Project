import { Component,computed,effect,linkedSignal,signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { IProduct } from './interfaces/product';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //writrable signals
  /* operator1 = signal(30);
  operator2 = signal(20);

  //computed signal. El sum se vuelve tipo de dato signal
  sum = computed(() => this.operator1() + this.operator2());

  //writable signal
  linkedSum = linkedSignal(() => this.operator1() + this.operator2())

  constructor() {

    //effect signal
    effect(() => {
      console.log('Sum has changed:', this.sum());
    });
  } */

    //se agrega la propiedad de quantity al producto para poder llevar el control de cuantos productos se han agregado al carrito
    //cart = signal<(IProduct & {quantity: number})[]>([]);

    //uso de servicio
    productService = new ProductService();

    cart = this.productService.cart;

    addToCart(product: IProduct) {
      //se comprueba si ya existe el producto en el carrito, si es así se actualiza la cantidad, si no se agrega el producto al carrito con una cantidad de 1
      const existingProduct = this.productService.cart().find(item => item.id === product.id);
      if (existingProduct) {
        this.cart.update(prev => prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
      } else {
        this.cart.update(prev => [...prev, {...product, quantity: 1}]);
      }
    }

    //se hace desde aqui ya que es cart.ts usa un signal tipo input y no acepta los metodos de update o set
    removeItem(productId: number) {
      this.cart.update(prev => prev.filter(item => item.id !== productId));
    }
}
