import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { TabsControllerPageModule } from '../pages/tabs-controller/tabs-controller.module';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//import {TabsControllerPageModule} from '../pages/tabs-controller/tabs-controller.module';
//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
//import {TabsControllerPageModule} from 
@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,TabsControllerPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  
] 

})
export class AppModule {}