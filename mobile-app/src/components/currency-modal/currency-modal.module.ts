import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CurrencyModal } from './currency-modal';

@NgModule({
  declarations: [
    CurrencyModal,
  ],
  imports: [
      //IonicModule.forChild(CurrencyModal),
  ],
  exports: [
    CurrencyModal
  ]
})
export class CurrencyModalModule {}
