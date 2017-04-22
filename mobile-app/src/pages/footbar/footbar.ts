import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'footbar',
  templateUrl: 'footbar.html'
})

export class footbarComponent {

		holdCurrencyAmount:any;
		holdCurrency:any;

		buyRate: any;
		sellRate: any;

		needCurrency:any;
		needCurrencyAmount:any;

		matched: boolean;
		accepted: boolean;
		declined: boolean;
		holder: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    	// Hard Coded
    	this.holdCurrencyAmount = '0';
    	this.holdCurrency = 'HKD';

    	this.buyRate = 7.76; 	// you can sell 1 USD to bank for 7.76 HKD 
    	this.sellRate = 7.8; 	// you can buy 1 USD from bank with 7.78 HKD 
    	
    	this.needCurrency = 'USD';
    	this.needCurrencyAmount = '0';

    	this.holder = {
    		name: "Micheal Wong",
    		pic: "../../assets/img/seller.jpg",
    		dist: "203"
    	}
    	// Hard Coded End

    	this.matched = false;
    	this.accepted = false;
    	this.declined = false;

    }

    calculateNeed() {
    	// how much USD can I exchange for
    	this.needCurrencyAmount = parseInt(this.holdCurrencyAmount) / this.sellRate;	
    }

    calculateHold() {
    	// how much HKD do I need
    	this.holdCurrencyAmount = (parseInt(this.needCurrencyAmount) * this.sellRate).toString();	
    }

    match() {
    	this.matched = true;
    }

    accept() {
    	this.accepted = true;
    }

    decline() {
    	this.declined = true;
    }

    isMatched() {
    	return this.matched;
    }

    isAccepted() {
    	return this.accepted;
    }

    isDeclined() {
    	return this.declined;
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad footbar');
    }

}
