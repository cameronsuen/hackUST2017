import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'footbar',
  templateUrl: 'footbar.html'
})

export class footbarComponent {

	dollar: any;
    
    currency: string;

    @Input() holdCurrency: string;
    @Input() needCurrency: string;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.currency = this.needCurrency;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad footbar');
    }

    changeToNeed() {
        this.currency = this.needCurrency;
    }

    changeToHold() {
        this.currency = this.holdCurrency;
    }

}
