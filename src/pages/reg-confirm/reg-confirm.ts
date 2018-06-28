import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';


@Component({
    selector: 'page-reg-confirm',
    templateUrl: 'reg-confirm.html',
   })


export class RegConfirmPage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {}


 navigateToPaymentPage() {
     console.log("Navigating to payment...");
     this.navCtrl.push(PaymentPage);
 }


 ionViewDidLoad() {
   console.log('ionViewDidLoad RegConfirmPage');
 }

}