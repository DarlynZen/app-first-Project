import { Component, Inject, output } from '@angular/core';
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

  //onAddToCart = output<IProduct>();

  //usando metodo create del service para que se instancie una sola vez y se comparta entre los componentes que lo usen, en este caso product-list y cart
  productService: ProductService;
  public productList: IProduct[] = [];

  constructor(@Inject("ProvideProduct") productService: ProductService) {
    this.productService = productService;
    this.productList = this.productService.productList();
  }

  public addToCart(product: IProduct) {
    this.productService.addToCart(product);
    /* // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log('Product agregado al carro:', product);
    this.onAddToCart.emit(product);
    
    //primero se busca el producto en la lista de productos, si se encuentra se reduce el stock en 1
    const prd = this.productList.find(p => p.id === product.id);
    if (prd) {
      prd.stock -= 1;
    } */
  }
}
