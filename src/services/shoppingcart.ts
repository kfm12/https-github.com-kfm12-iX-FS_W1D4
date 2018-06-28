import { Product } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable()

export class ShoppingCartService {


    public static shoppingCart = Array<Product>();


    constructor() {
        ShoppingCartService.shoppingCart = []
    }
    static getShoppingCart() {
        console.log("getting shopping cart...");
        return ShoppingCartService.shoppingCart;
    }

    static addToCart(product: Product) {
        ShoppingCartService.shoppingCart.push(product);
    }
}