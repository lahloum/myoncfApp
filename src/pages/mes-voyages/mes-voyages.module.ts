import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesVoyagesPage } from './mes-voyages';

@NgModule({
  declarations: [
    MesVoyagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesVoyagesPage),
  ],
  exports: [
    MesVoyagesPage
  ]
})
export class MesVoyagesPageModule {}
