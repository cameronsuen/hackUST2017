import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RequestService } from '../../providers/request-service';
import firebase from 'firebase';

@Component({
  selector: 'footbar',
  templateUrl: 'footbar.html'
})

export class footbarComponent {
  
    // currency you selected, either hold or need 
    currency: string;
    currencyAmount: string;
    secondaryCurrency: string;
    secondaryCurrencyAmount: string;

		holdCurrencyAmount: any;
		needCurrencyAmount: any;

		buyRate: number;
		sellRate: number;
    
    @Input() coords: any;
    @Input() isMatch: boolean;
    @Input() holdCurrency: string;	// eg HKD 
    @Input() needCurrency: string;	// eg USD

		matched: boolean;
		accepted: boolean;
		declined: boolean;
		finished: boolean;
		holder: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private requestService: RequestService) {
    	// Hard Coded

    	this.buyRate = 1/7.76; 	// you can sell 1 USD to bank for 7.76 HKD 
    	this.sellRate = 7.8; 	// you can buy 1 USD from bank with 7.8 HKD 
    	
    	this.holder = {
    		name: "Micheal Wong",
    		pic: "../../assets/img/seller.jpg",
    		dist: "203"
    	}
    	// Hard Coded End

    	this.currencyAmount = '0';
    	this.secondaryCurrencyAmount = '0';
      this.currency = this.holdCurrency;
      this.secondaryCurrency = this.needCurrency;
    	
    	this.matched = false;
    	this.accepted = false;
    	this.declined = false;
    	this.finished = false;
    }

    calculateCash() {
    	if (this.currency === this.holdCurrency) {
	    	// I have XXX USD, how much HKD can I exchange for ?
    		this.secondaryCurrencyAmount = (parseFloat(this.currencyAmount) / this.buyRate).toFixed(2).toString();	

    	} else {
	    	// I want XXX HKD, how much USD do I need
    		this.secondaryCurrencyAmount = (parseFloat(this.currencyAmount) * this.buyRate).toFixed(2).toString();	
    	}
    	this.currencyAmount = parseFloat(this.currencyAmount).toFixed(2).toString()
    }

    match() {
    	if (this.currencyAmount === '0')
    		return;

        this.requestService.sendNotification(this.currencyAmount, this.holdCurrency, this.needCurrency, this.currency,  this.coords);

    	this.matched = true;
    	this.declined = false;
    	this.accepted = false;
    	this.finished = false;
    }

    accept() {
    	this.accepted = true;
    }

    decline() {
    	this.declined = true;
    	this.matched = false;
    	this.accepted = false;
    	this.finished = false;
    }

    finish() {
    	this.finished = true;
    	this.accepted = false;
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

    isProvider() {
        return this.isMatch;
    }
    
    isFinished() {
    	return this.finished;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad footbar');
    }

    changeToNeed() {
        this.currency = this.needCurrency;
        this.secondaryCurrency = this.holdCurrency;
        this.currencyAmount = '0';
        this.secondaryCurrencyAmount = '0';
        // document.getElementById('holdBtn').setAttribute("color","default");
        // document.getElementById('needBtn').setAttribute("color","light");
    }

    changeToHold() {
        this.currency = this.holdCurrency;
        this.secondaryCurrency = this.needCurrency;
        this.currencyAmount = '0';
        this.secondaryCurrencyAmount = '0';
        // document.getElementById('holdBtn').setAttribute("color","default");
        // document.getElementById('needBtn').setAttribute("color","light");
    }

}
