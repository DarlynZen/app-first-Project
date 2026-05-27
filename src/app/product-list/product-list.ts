import { Component, output } from '@angular/core';
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

  onAddToCart = output<IProduct>();

  //usando service
  productService = new ProductService();
  public productList: IProduct[] = this.productService.productList;

  addToCart(product: IProduct) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log('Product agregado al carro:', product);
    
    //primero se busca el producto en la lista de productos, si se encuentra se reduce el stock en 1
    const prd = this.productList.find(p => p.id === product.id);
    if (prd) {
      prd.stock -= 1;
    }
    
    this.onAddToCart.emit(product);
  }

}
