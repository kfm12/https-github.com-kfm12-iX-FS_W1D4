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
  // public email: string; //
  // public password: string; //

  // public names: Array<string>; //
  // public names2: string[]; //

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.email = "kfm12@duke.edu"; //
  }
  // pressMe(argument1: string, argument2: number){ //
  //   console.log("This email is" + this.email); //
  //   console.log("Argument 1:", argument1); //
  //   console.log("Argument 2:", argument2); //
  // } //
  navigateToProfile() {
    console.log("Navigating...");

    this.navCtrl.push(ProfilePage);
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

}

// Class overview / object-oriented programming

// class Animal {
//   type: string;
//   age: number;

//   constructor(type:string) {
//     this.type = type;
//     this.type = "I am a dog";

//     this.age = 1;
//     this.age = 5.6;
//   }

//   makeNoise() {
//     console.log("Making noise");
//   }
// }

// class Dog extends Animal {

//   someAnimal: Animal;

//   constructor(){
//     // new Animal ("dog)");
//     super("dog");
//   }
// }

// var dog = new Animal("dog");
// dog.makeNoise();

// var cat = new Animal("cat");

// var dog = new Animal("dog");
// var doggy = new Dog();
