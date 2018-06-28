import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { RegConfirmPage } from '../reg-confirm/reg-confirm';

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html',
   })


export class RegistrationPage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {}


 ionViewDidLoad() {
   console.log('ionViewDidLoad RegistrationPage');
 }

 navigateToRegConfirm() {
   console.log("Navigating to reg-confirm...");
   this.navCtrl.push(RegConfirmPage);
 }

}