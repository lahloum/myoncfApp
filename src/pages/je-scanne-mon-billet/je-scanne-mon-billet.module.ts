import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeScanneMonBilletPage } from './je-scanne-mon-billet';

@NgModule({
  declarations: [
    JeScanneMonBilletPage,
  ],
  imports: [
    IonicPageModule.forChild(JeScanneMonBilletPage),
  ],
  exports: [
    JeScanneMonBilletPage
  ]
})
export class JeScanneMonBilletPageModule {}
