import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import firebase from 'firebase';

@Component({
  selector: 'page-fbLogin',
  templateUrl: 'home.html',
})

export class LoginPage {

    /*autocompleteItems: any;
    autocomplete: any;
    acService:any;
    placesService: any; 

    @ViewChild('map') mapElement: ElementRef;
    map: any;*/

    constructor(public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook) {
    }

    facebookLogin() {
        this.facebook.login(['email']).then( (response) => {
            const facebookCredential = firebase.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);

            firebase.auth().signInWithCredential(facebookCredential)
            .then((success) => {
                console.log("Firebase success: " + JSON.stringify(success));
                this.navCtrl.push(HomePage);
            })
            .catch((error) => {
                console.log("Firebase failure: " + JSON.stringify(error));
            });

        }).catch((error) => { console.log(error) });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad fbLogin');
    }

}
	
