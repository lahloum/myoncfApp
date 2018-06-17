import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MesVoyagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-voyages',
  templateUrl: 'mes-voyages.html',
})
export class MesVoyagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openJeScanneMonBillet() {
    this.navCtrl.push('JeScanneMonBilletPage');
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MesVoyagesPage');
  }

}
