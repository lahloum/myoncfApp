import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeCrEMonComptePage } from './je-cr-e-mon-compte';

@NgModule({
  declarations: [
    JeCrEMonComptePage,
  ],
  imports: [
    IonicPageModule.forChild(JeCrEMonComptePage),
  ],
  exports: [
    JeCrEMonComptePage
  ]
})
export class JeCrEMonComptePageModule {}
