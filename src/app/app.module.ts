import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { TabsControllerPageModule } from '../pages/tabs-controller/tabs-controller.module';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { JeScanneMonBilletPage } from '../pages/je-scanne-mon-billet/je-scanne-mon-billet';
//import { JeScanneMonBilletPage } from '../pages/je-scanne-mon-billet/je-scanne-mon-billet;

//import {TabsControllerPageModule} from '../pages/tabs-controller/tabs-controller.module';
//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
//import {TabsControllerPageModule} from 
@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    JeScanneMonBilletPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,TabsControllerPage,
    JeScanneMonBilletPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  
] 

})
export class AppModule {}