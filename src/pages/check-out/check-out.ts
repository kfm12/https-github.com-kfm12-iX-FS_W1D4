import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { PaymentPage } from '../payment/payment';


// @IonicPage()
@Component({
    selector: 'page-check-out',
    templateUrl: 'check-out.html'
})
export class CheckOutPage {


    constructor(public navCtrl: NavController, public navParams: NavParams) { }


    navigateToLogin() {
        console.log("Navigating...");
        this.navCtrl.push(LoginPage);
    }

    navigateToRegistration() {
        console.log("Navigating...");
        this.navCtrl.push(RegistrationPage);
    }

    navigateToPayment() {
        console.log("Navigating to payment...");
        this.navCtrl.push(PaymentPage);
    }

    ionViewDidLoad() {
        console.log("Navigating...");
    }

}