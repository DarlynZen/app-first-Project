import { Component, output } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-list',
  imports: [Product],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  onAddToCart = output<IProduct>();

  public productList: IProduct[] = [
    { id: 1, name: 'Laptop Asus ZenBook 14 i7-1355U 16GB 512GB', price: 1099 },
    { id: 2, name: 'Laptop Dell XPS 13 i5-1340P 16GB 512GB', price: 1199 },
    { id: 3, name: 'Laptop Lenovo ThinkPad T14 Ryzen 7 7840U 16GB 1TB', price: 1299 },
    { id: 4, name: 'MacBook Air 13 M2 8GB 256GB', price: 999 },
    { id: 5, name: 'HP Envy 15 i7-12700H 16GB 1TB', price: 1249 },
    { id: 6, name: 'Gaming Laptop Acer Nitro 5 i5-12500H 16GB 512GB RTX 3050', price: 899 },
    { id: 7, name: 'Gaming Laptop ASUS TUF A15 Ryzen 7 7735HS 16GB 512GB RTX 4060', price: 1299 },
    { id: 8, name: 'Mini PC Intel NUC 12 i5 16GB 512GB', price: 599 },
    { id: 9, name: 'Desktop HP Pavilion i5-13400F 16GB 1TB RTX 3060', price: 1099 },
    { id: 10, name: 'Desktop Custom Ryzen 5 7600 32GB 1TB RTX 4070', price: 1899 },
    { id: 11, name: 'Monitor LG 27in 4K IPS 60Hz', price: 329 },
    { id: 12, name: 'Monitor Dell 24in 1080p IPS 75Hz', price: 179 },
    { id: 13, name: 'Monitor Samsung 34in Ultrawide QHD 100Hz', price: 499 },
    { id: 14, name: 'Monitor ASUS 27in 1440p 165Hz', price: 349 },
    { id: 15, name: 'Monitor BenQ 24in IPS 144Hz', price: 229 },
    { id: 16, name: 'Keyboard Mechanical Keychron K2 RGB Brown', price: 89 },
    { id: 17, name: 'Keyboard Logitech MX Keys Mini', price: 99 },
    { id: 18, name: 'Mouse Logitech MX Master 3S', price: 119 },
    { id: 19, name: 'Mouse Razer DeathAdder V2', price: 49 },
    { id: 20, name: 'Headset HyperX Cloud II', price: 89 },
    { id: 21, name: 'Headset SteelSeries Arctis 7 Wireless', price: 159 },
    { id: 22, name: 'Webcam Logitech C920 1080p', price: 69 },
    { id: 23, name: 'Webcam Elgato Facecam 1080p', price: 149 },
    { id: 24, name: 'Microphone Blue Yeti USB', price: 99 },
    { id: 25, name: 'Microphone HyperX QuadCast', price: 139 },
    { id: 26, name: 'Speaker Edifier R1280T', price: 129 },
    { id: 27, name: 'Router TP-Link Archer AX55 WiFi 6', price: 99 },
    { id: 28, name: 'Router ASUS RT-AX88U WiFi 6', price: 299 },
    { id: 29, name: 'SSD Samsung 990 Pro 1TB NVMe', price: 149 },
    { id: 30, name: 'SSD WD Black SN850X 2TB NVMe', price: 259 },
    { id: 31, name: 'HDD Seagate Barracuda 4TB 7200RPM', price: 99 },
    { id: 32, name: 'RAM Corsair Vengeance 32GB DDR5 6000', price: 129 },
    { id: 33, name: 'RAM Kingston Fury 16GB DDR4 3200', price: 49 },
    { id: 34, name: 'GPU NVIDIA RTX 4070 12GB', price: 599 },
    { id: 35, name: 'GPU AMD Radeon RX 7800 XT 16GB', price: 549 },
    { id: 36, name: 'CPU Intel Core i7-13700K', price: 379 },
    { id: 37, name: 'CPU AMD Ryzen 7 7700X', price: 329 },
    { id: 38, name: 'Motherboard MSI B650 Tomahawk', price: 219 },
    { id: 39, name: 'Motherboard ASUS ROG Z790', price: 399 },
    { id: 40, name: 'PSU Corsair RM750x 750W', price: 139 },
    { id: 41, name: 'Case NZXT H510', price: 89 },
    { id: 42, name: 'Cooler Noctua NH-D15', price: 109 },
    { id: 43, name: 'Tablet Samsung Galaxy Tab S9 11in 128GB', price: 699 },
    { id: 44, name: 'Tablet Apple iPad 10th Gen 64GB', price: 449 },
    { id: 45, name: 'Smartphone Samsung Galaxy S24 256GB', price: 999 },
    { id: 46, name: 'Smartphone iPhone 15 128GB', price: 899 },
    { id: 47, name: 'Smartwatch Apple Watch Series 9 45mm', price: 399 },
    { id: 48, name: 'Smartwatch Samsung Galaxy Watch 6 44mm', price: 299 },
    { id: 49, name: 'External SSD SanDisk Extreme 1TB USB-C', price: 129 },
    { id: 50, name: 'Docking Station Anker 777 Thunderbolt 4', price: 299 }
  ];

  addToCart(product: IProduct) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito desde ProductList:', product);
  }

}
