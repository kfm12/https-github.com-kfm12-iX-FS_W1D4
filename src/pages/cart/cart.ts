import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shoppingcart';
import { ProductsPage } from '../products/products';
import { CheckOutPage } from '../check-out/check-out';


// @IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html'
})
export class CartPage {

    public products: Array<Product> = ShoppingCartService.getShoppingCart();


    constructor(public navCtrl: NavController, public navParams: NavParams) { }


    navigateToProducts() {
        console.log("Navigating...");
        this.navCtrl.push(ProductsPage);
    }

    navigateToCheckOut() {
        console.log("Navigating to check-out...");
        this.navCtrl.push(CheckOutPage);
    }

    ionViewDidLoad() {
        console.log("Navigating...");
    }

}