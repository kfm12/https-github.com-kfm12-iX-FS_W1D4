import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
 selector: 'page-login',
 templateUrl: 'login.html',
})
export class LoginPage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {}

  navigateToProfile() {
    console.log("Navigating...");

    this.navCtrl.push(ProfilePage);
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

}