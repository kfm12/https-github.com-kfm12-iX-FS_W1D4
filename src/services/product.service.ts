import { Product } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {

    private products: Array<Product>;

    constructor() {
        this.products = []
    }

    getAllProducts() {

        this.products = [];
        var product1: Product = new Product();
        product1.id = 1;
        product1.price = 5;
        product1.name = "Nike shoes";
        product1.description = "Super cool shoes."
        product1.stockedQty = 50;


        var product2: Product = new Product();
        product2.id = 2;
        product2.price = 6
        product2.name = "Adidas shoes";
        product2.description = "Slightly less cool shoes."
        product2.stockedQty = 100;

        this.products.push(product1);
        this.products.push(product2);
        return this.products;
    }
}