import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsControllerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html',
})
export class TabsControllerPage {
  tab1 = 'MonComptePage';
  tab2 = 'MesVoyagesPage';
  tab3 = 'MesServicesPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsControllerPage');
  }

}
