import { signal } from '@angular/core';
import { IProduct } from '../interfaces/product';

export class ProductService {
    public productList = signal<IProduct[]>([
        { id: 1, name: 'Laptop Asus ZenBook 14 i7-1355U 16GB 512GB', price: 1099, stock: 18 },
        { id: 2, name: 'Laptop Dell XPS 13 i5-1340P 16GB 512GB', price: 1199, stock: 7 },
        { id: 3, name: 'Laptop Lenovo ThinkPad T14 Ryzen 7 7840U 16GB 1TB', price: 1299, stock: 12 },
        { id: 4, name: 'MacBook Air 13 M2 8GB 256GB', price: 999, stock: 21 },
        { id: 5, name: 'HP Envy 15 i7-12700H 16GB 1TB', price: 1249, stock: 9 },
        { id: 6, name: 'Gaming Laptop Acer Nitro 5 i5-12500H 16GB 512GB RTX 3050', price: 899, stock: 14 },
        { id: 7, name: 'Gaming Laptop ASUS TUF A15 Ryzen 7 7735HS 16GB 512GB RTX 4060', price: 1299, stock: 6 },
        { id: 8, name: 'Mini PC Intel NUC 12 i5 16GB 512GB', price: 599, stock: 23 },
        { id: 9, name: 'Desktop HP Pavilion i5-13400F 16GB 1TB RTX 3060', price: 1099, stock: 5 },
        { id: 10, name: 'Desktop Custom Ryzen 5 7600 32GB 1TB RTX 4070', price: 1899, stock: 3 },
        { id: 11, name: 'Monitor LG 27in 4K IPS 60Hz', price: 329, stock: 27 },
        { id: 12, name: 'Monitor Dell 24in 1080p IPS 75Hz', price: 179, stock: 31 },
        { id: 13, name: 'Monitor Samsung 34in Ultrawide QHD 100Hz', price: 499, stock: 11 },
        { id: 14, name: 'Monitor ASUS 27in 1440p 165Hz', price: 349, stock: 16 },
        { id: 15, name: 'Monitor BenQ 24in IPS 144Hz', price: 229, stock: 19 },
        { id: 16, name: 'Keyboard Mechanical Keychron K2 RGB Brown', price: 89, stock: 42 },
        { id: 17, name: 'Keyboard Logitech MX Keys Mini', price: 99, stock: 35 },
        { id: 18, name: 'Mouse Logitech MX Master 3S', price: 119, stock: 28 },
        { id: 19, name: 'Mouse Razer DeathAdder V2', price: 49, stock: 44 },
        { id: 20, name: 'Headset HyperX Cloud II', price: 89, stock: 25 },
        { id: 21, name: 'Headset SteelSeries Arctis 7 Wireless', price: 159, stock: 13 },
        { id: 22, name: 'Webcam Logitech C920 1080p', price: 69, stock: 33 },
        { id: 23, name: 'Webcam Elgato Facecam 1080p', price: 149, stock: 8 },
        { id: 24, name: 'Microphone Blue Yeti USB', price: 99, stock: 22 },
        { id: 25, name: 'Microphone HyperX QuadCast', price: 139, stock: 17 },
        { id: 26, name: 'Speaker Edifier R1280T', price: 129, stock: 26 },
        { id: 27, name: 'Router TP-Link Archer AX55 WiFi 6', price: 99, stock: 29 },
        { id: 28, name: 'Router ASUS RT-AX88U WiFi 6', price: 299, stock: 10 },
        { id: 29, name: 'SSD Samsung 990 Pro 1TB NVMe', price: 149, stock: 24 },
        { id: 30, name: 'SSD WD Black SN850X 2TB NVMe', price: 259, stock: 7 },
        { id: 31, name: 'HDD Seagate Barracuda 4TB 7200RPM', price: 99, stock: 15 },
        { id: 32, name: 'RAM Corsair Vengeance 32GB DDR5 6000', price: 129, stock: 20 },
        { id: 33, name: 'RAM Kingston Fury 16GB DDR4 3200', price: 49, stock: 38 },
        { id: 34, name: 'GPU NVIDIA RTX 4070 12GB', price: 599, stock: 4 },
        { id: 35, name: 'GPU AMD Radeon RX 7800 XT 16GB', price: 549, stock: 6 },
        { id: 36, name: 'CPU Intel Core i7-13700K', price: 379, stock: 12 },
        { id: 37, name: 'CPU AMD Ryzen 7 7700X', price: 329, stock: 9 },
        { id: 38, name: 'Motherboard MSI B650 Tomahawk', price: 219, stock: 11 },
        { id: 39, name: 'Motherboard ASUS ROG Z790', price: 399, stock: 5 },
        { id: 40, name: 'PSU Corsair RM750x 750W', price: 139, stock: 30 },
        { id: 41, name: 'Case NZXT H510', price: 89, stock: 27 },
        { id: 42, name: 'Cooler Noctua NH-D15', price: 109, stock: 18 },
        { id: 43, name: 'Tablet Samsung Galaxy Tab S9 11in 128GB', price: 699, stock: 6 },
        { id: 44, name: 'Tablet Apple iPad 10th Gen 64GB', price: 449, stock: 14 },
        { id: 45, name: 'Smartphone Samsung Galaxy S24 256GB', price: 999, stock: 9 },
        { id: 46, name: 'Smartphone iPhone 15 128GB', price: 899, stock: 8 },
        { id: 47, name: 'Smartwatch Apple Watch Series 9 45mm', price: 399, stock: 16 },
        { id: 48, name: 'Smartwatch Samsung Galaxy Watch 6 44mm', price: 299, stock: 13 },
        { id: 49, name: 'External SSD SanDisk Extreme 1TB USB-C', price: 129, stock: 21 },
        { id: 50, name: 'Docking Station Anker 777 Thunderbolt 4', price: 299, stock: 7 }
    ]);

    public cart = signal<(IProduct & { quantity: number })[]>([]);

    constructor() {
        console.log('ProductService initialized');
    }

    addToCart(product: IProduct) {
        //se comprueba si ya existe el producto en el carrito, si es así se actualiza la cantidad, si no se agrega el producto al carrito con una cantidad de 1
        const existingProduct = this.cart().find(item => item.id === product.id);
        if (existingProduct) {
            this.cart.update(prev => prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            this.cart.update(prev => [...prev, { ...product, quantity: 1 }]);
        }
        this.reduceStock(product.id);
    }

    private reduceStock(productId: number) {
        const prd = this.productList().find(p => p.id === productId);
        if (prd && prd.stock > 0) {
            prd.stock -= 1;

            const products = this.productList();
            const index = products.findIndex(p => p.id === productId);
            //si encuentra el producto en la lista de productos, se actualiza el stock del producto en la lista de productos
            if (index !== -1) {
                this.productList.update(prev => {
                    const updatedProducts = [...prev];
                    updatedProducts[index] = { ...updatedProducts[index], stock: prd.stock };
                    return updatedProducts;
                });
            }
        }
    }

    removeFromCart(productId: number) {
        //primero busca si el producto existe en el carrito, si es así se elimina del carrito y se aumenta el stock del producto en la lista de productos
        const productInCart = this.cart().find(item => item.id === productId);
        if (productInCart) {
            this.cart.update(prev => prev.filter(item => item.id !== productId));
            const prd = this.productList().find(p => p.id === productId);
            if (prd) {
                prd.stock += productInCart.quantity;

                const products = this.productList();
                const index = products.findIndex(p => p.id === productId);
                //si encuentra el producto en la lista de productos, se actualiza el stock del producto en la lista de productos
                if (index !== -1) {
                    this.productList.update(prev => {
                        const updatedProducts = [...prev];
                        updatedProducts[index] = { ...updatedProducts[index], stock: prd.stock };
                        return updatedProducts;
                    });
                }
            }
        }
    }

    /*   
    
        //la clase se instancia a sí misma una vez para ser usada como singleton, esto permite que la misma instancia del servicio sea compartida entre los componentes que lo usen, en este caso product-list y cart, lo que facilita la gestión del estado del carrito y la lista de productos sin necesidad de pasar datos entre componentes o usar un sistema de gestión de estado más complejo.
        static instance: ProductService;
    
        //método para obtener la instancia de la clase
        static create(): ProductService {
            if (!ProductService.instance) {
                ProductService.instance = new ProductService();
            }
            return ProductService.instance;
        } */
}