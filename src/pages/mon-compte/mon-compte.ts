import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MonComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mon-compte',
  templateUrl: 'mon-compte.html',
})
export class MonComptePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openJeMeconnecte() {
    this.navCtrl.push('JeMeConnectePage');
  }
 
  openJeCreeMonCompte() {
    this.navCtrl.push('JeCrEMonComptePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonComptePage');
  }

}
