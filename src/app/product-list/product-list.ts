import { Component, Inject, output, Signal } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Product } from '../product/product';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product-list',
  imports: [Product],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  //usando metodo create del service para que se instancie una sola vez y se comparta entre los componentes que lo usen, en este caso product-list y cart
  productService: ProductService;
  public productList: Signal<IProduct[]>;

  constructor(@Inject("ProvideProduct") productService: ProductService) {
    this.productService = productService;
    //asi nada mas entregado desde el service si usara un writableSignal, el valor de productList se puede modificar con set o update, y se debe evitar que eso ocurra
    this.productList = this.productService.productList;

  }

  public addToCart(product: IProduct) {
    this.productService.addToCart(product);
  }
}
