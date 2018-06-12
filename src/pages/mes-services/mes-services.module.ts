import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesServicesPage } from './mes-services';
import { MesVoyagesPage } from '../mes-voyages/mes-voyages';

@NgModule({
  declarations: [
    MesServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesServicesPage),
  ],
  exports: [
    MesServicesPage
  ]
})
export class MesServicesPageModule {}
