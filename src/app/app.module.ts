import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegistrationPage } from '../pages/registration/registration';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { AboutPage } from '../pages/about/about';
import { ProductService } from '../services/product.service'
import { CartPage } from '../pages/cart/cart';
import { CheckOutPage } from '../pages/check-out/check-out';
import { PaymentPage } from '../pages/payment/payment';
import { RegConfirmPage } from '../pages/reg-confirm/reg-confirm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductPage,
    AboutPage,
    CartPage,
    CheckOutPage,
    LoginPage,
    ProfilePage,
    RegistrationPage,
    RegConfirmPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductPage,
    AboutPage,
    CartPage,
    CheckOutPage,
    LoginPage,
    ProfilePage,
    RegistrationPage,
    RegConfirmPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}