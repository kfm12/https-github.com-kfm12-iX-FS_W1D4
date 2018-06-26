import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
 selector: 'page-profile',
 templateUrl: 'profile.html',
})
export class ProfilePage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {}

 navigateToHome() {
  console.log("Navigating...");


  this.navCtrl.pop();
  this.navCtrl.pop();
  // ask about pushing vs popping in class

 }
 
 ionViewDidLoad() {
   console.log('ionViewDidLoad ProfilePage');
 }

}