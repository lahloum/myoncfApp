import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http'; 
 
import { MyApp } from './app.component';
//import { TabsControllerPageModule } from '../pages/tabs-controller/tabs-controller.module';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

//import { JeScanneMonBilletPage } from '../pages/je-scanne-mon-billet/je-scanne-mon-billet';
import { DetailPageModule } from '../pages/detail/detail.module';
import { BilletinfosProvider } from '../providers/billetinfos/billetinfos';
import { MesVoyagesPageModule } from '../pages/mes-voyages/mes-voyages.module';
//import { JeScanneMonBilletPage } from '../pages/je-scanne-mon-billet/je-scanne-mon-billet';
import { JeScanneMonBilletPageModule } from '../pages/je-scanne-mon-billet/je-scanne-mon-billet.module';
import { JeCrEMonComptePageModule } from '../pages/je-cr-e-mon-compte/je-cr-e-mon-compte.module';

//import {TabsControllerPageModule} from '../pages/tabs-controller/tabs-controller.module';
//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
//import {TabsControllerPageModule} from 
@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage
    //JeCrEMonComptePage,
    //JeScanneMonBilletPage,
    //DetailPage
   // MesVoyagesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JeScanneMonBilletPageModule,
    MesVoyagesPageModule,
    JeCrEMonComptePageModule,
    DetailPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,TabsControllerPage
    //JeCrEMonComptePage,
    //JeScanneMonBilletPage,
    //DetailPage
    //MesVoyagesPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BilletinfosProvider
  
] 

})
export class AppModule {}