import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shoppingcart';


@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})



export class PaymentPage {

    public products: Array<Product> = ShoppingCartService.getShoppingCart();

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    productSum(products: Array<Product>) {
        var sum = 0;
        for (let product of products) {
            console.log(product.price)
            sum += product.price;
        }
        return sum;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PaymentPage');
    }
}