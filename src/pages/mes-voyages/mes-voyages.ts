import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BilletinfosProvider } from '../../providers/billetinfos/billetinfos';


@IonicPage()
@Component({
  selector: 'page-mes-voyages',
  templateUrl: 'mes-voyages.html',
})
export class MesVoyagesPage {

  billetsinfo: any[];
  nullmsg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public billetinfosprovider: BilletinfosProvider) {
  }


  openJeScanneMonBillet() {
    this.navCtrl.push('JeScanneMonBilletPage');
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesVoyagesPage');
    this.storage.get('infos').then((val) => {
      if (val != null){
        var infos = JSON.parse(val);
        if (infos.billets.length > 1){
          this.billetsinfo = new Array();
          this.nullmsg = "Liste des voyages";
          for (let bi of infos.billetinfos) {
            this.billetsinfo.push(this.billetinfosprovider.getbilletinfos(bi));
          }          
        }else{
          this.nullmsg = "Aucun voyage n'est prévu ...";
        }
      }

    });
  }

}
