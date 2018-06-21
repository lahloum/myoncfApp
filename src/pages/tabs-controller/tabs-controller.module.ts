import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsControllerPage } from './tabs-controller';
import { MonComptePage } from '../mon-compte/mon-compte';
import { MesVoyagesPage } from '../mes-voyages/mes-voyages';
import { MesServicesPage } from '../mes-services/mes-services';

@NgModule({
  declarations: [
    TabsControllerPage
  ],
  imports: [
    IonicPageModule.forChild(TabsControllerPage),
  ],
  exports: [
    TabsControllerPage
  ],
  entryComponents : [
    //MonComptePage,MesServicesPage,MesVoyagesPage,TabsControllerPage
  ]
  
})
export class TabsControllerPageModule {}
