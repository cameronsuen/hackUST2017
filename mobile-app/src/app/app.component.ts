import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/fblogin/home';

import { CurrencyModal } from '../components/currency-modal/currency-modal';

import firebase from 'firebase';

@Component({
    templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

  var config = {
        apiKey: "AIzaSyC6LWXTXeO6axRe02xAEWu9CvDMr0EqWjo",
        authDomain: "hackust2017-1492830202855.firebaseapp.com",
        databaseURL: "https://hackust2017-1492830202855.firebaseio.com",
        projectId: "hackust2017-1492830202855",
        storageBucket: "hackust2017-1492830202855.appspot.com",
        messagingSenderId: "1030672296146"
  };
  firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

