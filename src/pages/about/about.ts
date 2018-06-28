import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';

@Component({
 selector: 'page-about',
 templateUrl: 'about.html',
})
export class AboutPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
 }
 navigateToProducts(){
     console.log("Navigating...");
     this.navCtrl.push(ProductsPage);
 }
 ionViewDidLoad() {
   console.log('ionViewDidLoad AboutPage');
 }

}