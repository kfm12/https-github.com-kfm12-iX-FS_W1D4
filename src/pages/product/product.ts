import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shoppingcart';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})



export class ProductPage {

    public product: Product = new Product();

    // public cart: Array<Product>;

    constructor(public navCtrl: NavController, 
        // public cartService: ShoppingCartService,
        public navParams: NavParams) {
        this.product = this.navParams.get("productParameter"); //new Product()

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutPage');
        console.log('product? ' + this.product);
    }
    
    addToCart(product: Product) {
        console.log("adding to cart...not!");
        var cart: Array<Product> = ShoppingCartService.getShoppingCart();
        console.log('Adding to cart...');
        ShoppingCartService.addToCart(product);
        console.log(cart);
    }
    
    navigateToCart(){
        console.log("Navigating to cart...");
        this.navCtrl.push(CartPage);
    }

        
    //   }
}

