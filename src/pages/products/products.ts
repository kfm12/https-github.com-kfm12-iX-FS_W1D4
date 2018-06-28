import { Component } from '@angular/core';
import {  NavController, NavParams, IonicPage } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductPage } from '../product/product';
import { ProductService } from '../../services/product.service';
import { CartPage } from '../cart/cart';

// @IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

    public products: Array<Product>;

    // private _cart: Array<Product>;
    // static cart: any;
    // public get cart(): Array<Product> {
    //     return this._cart;
    // }
    // public set cart(value: Array<Product>) {
    //     this._cart = value;
    // }
  
    constructor(
        public navCtrl: NavController,
         public navParams: NavParams,
         public productService: ProductService
        ) {

        // this.products = []

        // var productService = new ProductService();
        // this.products = productService.getAllProducts();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductsPage');
        this.products = this.productService.getAllProducts();
  }

  navigateToProduct(product: Product) {
      console.log('passing product: ' + product.id);
      this.navCtrl.push(ProductPage, {
        productParameter: product
      });
  }
  navigateToCart() {
      console.log("Navigating... to cart");
      this.navCtrl.push(CartPage);
  }

      
  }