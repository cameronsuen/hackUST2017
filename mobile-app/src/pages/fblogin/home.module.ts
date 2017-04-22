import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginPage } from './home';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
      //IonicModule.forChild(HomePage),
  ],
  exports: [
    LoginPage 
  ]
})
export class HomeModule {}
