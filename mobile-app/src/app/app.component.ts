import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/fblogin/home';

import { CurrencyModal } from '../components/currency-modal/currency-modal';
import { RequestService } from '../providers/request-service';

import firebase from 'firebase';

declare var FCMPlugin;

@Component({
    templateUrl: 'app.html',
    providers: [RequestService]
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

      if(typeof(FCMPlugin) !== "undefined"){
        FCMPlugin.getToken(function(t){
          console.log("Use this token for sending device specific messages\nToken: " + t);
        }, function(e){
          console.log("Uh-Oh!\n"+e);
        });

        FCMPlugin.onNotification(function(d){
          if(d.wasTapped){  
            // Background recieval (Even if app is closed),
            //   bring up the message in UI
          } else {
            // Foreground recieval, update UI or what have you...
          }
        }, function(msg){
          // No problemo, registered callback
        }, function(err){
          console.log("Arf, no good mate... " + err);
        });

        FCMPlugin.subscribeToTopic('topic');

        FCMPlugin.onNotification(function(data){
            if(data.wasTapped){
              //Notification was received on device tray and tapped by the user.
              alert( JSON.stringify(data) );
            }else{
              //Notification was received in foreground. Maybe the user needs to be notified.
              alert( JSON.stringify(data) );
            }
        });

    } else console.log("Notifications disabled, only provided in Android/iOS environment");
         
    })
  }
}

