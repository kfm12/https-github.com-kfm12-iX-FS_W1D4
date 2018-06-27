import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { AboutPage } from '../about/about'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  navigateToProducts() {
    console.log("Navigating...");

    this.navCtrl.push(ProductsPage);
  }

  navigateToAbout(){
    console.log("Navigation...");

    this.navCtrl.push(AboutPage);
  }



}
