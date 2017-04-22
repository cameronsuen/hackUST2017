import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'footbar',
  templateUrl: 'footbar.html'
})

export class footbarComponent {

		dollar:any;

		needCurrency:any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    	this.dollar = '';
    	this.needCurrency = 'USD';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad footbar');
    }

}
