import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ListViewPage } from '../pages/list-view/list-view';
import { SpecificInfoPage } from '../pages/specific-info/specific-info';
import * as credential from "./credential.json";



let config ={
  apiKey: (<any>credential).apiKey,
  authDomain: (<any>credential).authDomain,
  databaseURL: (<any>credential).databaseURL,
  projectId: (<any>credential).projectId,
  storageBucket: (<any>credential).storageBucket,
  messagingSenderId: (<any>credential).messagingSenderId
}

firebase.initializeApp(config);
firebase.database.enableLogging(true);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ListViewPage,
    SpecificInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ListViewPage,
    SpecificInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
