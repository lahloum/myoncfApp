import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  cnt: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  openJeMeconnecte() {
    this.navCtrl.push('JeMeConnectePage');
  }
 
  openJeCreeMonCompte() {
    this.navCtrl.push('JeCrEMonComptePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonComptePage');
    this.storage.get('infos').then((val) =>{
      if (val!=null){
        this.cnt = true;
        //console.log("true");
      }else{
        this.cnt = false;
        //console.log("false");
      }
    });
    console.log(this.cnt);
  }

}
