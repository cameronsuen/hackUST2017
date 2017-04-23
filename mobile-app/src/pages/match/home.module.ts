import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MatchPage } from './home';

@NgModule({
  declarations: [
    MatchPage,
  ],
  imports: [
      //IonicModule.forChild(HomePage),
  ],
  exports: [
    MatchPage
  ]
})
export class HomeModule {}
