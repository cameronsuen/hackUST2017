import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CurrencyModal component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'currency-modal',
  templateUrl: 'currency-modal.html'
})
export class CurrencyModal {

  text: string;
  currency: string;
  
  @Output() onCurrencyChange = new EventEmitter<string>();

  constructor() {
    console.log('Hello CurrencyModal Component');
    this.text = 'Hello World';
  }

  setCurrency(currency: string) {
    console.log(currency);
    this.onCurrencyChange.emit(currency);
    this.currency = currency;
    
  }
}
