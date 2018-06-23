import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MesServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-services',
  templateUrl: 'mes-services.html',
})
export class MesServicesPage {

  infos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesServicesPage');
    
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad MesServicesPage');
    this.storage.get('infos').then((val) => {
      if (val!=null){
        this.infos = JSON.parse(val);        
      }
    });
  }

}
