import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeMeConnectePage } from './je-me-connecte';

@NgModule({
  declarations: [
    JeMeConnectePage,
  ],
  imports: [
    IonicPageModule.forChild(JeMeConnectePage),
  ],
  exports: [
    JeMeConnectePage
  ]
})
export class JeMeConnectePageModule {}
