import { Component,computed,effect,linkedSignal,signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

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





}
