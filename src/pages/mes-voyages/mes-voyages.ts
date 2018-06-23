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
 

  ionViewWillEnter() {
    console.log('ionViewWillEnter MesVoyagesPage');
    this.storage.get('infos').then((val) => {
      if (val != null){
        console.log(val);
        var infos = JSON.parse(val);
        if (infos.billets.length > 0){
          this.billetsinfo = new Array();
          this.nullmsg = "Liste des voyages";
          var show_billet = infos.billets[infos.billets.length-1]
          var billet_info = this.billetinfosprovider.getbilletinfos(show_billet);
          this.billetsinfo.push(billet_info);
          //for (let bi of infos.billets) {
          //  this.billetsinfo.push(this.billetinfosprovider.getbilletinfos(bi));
          //}          
        }else{
          this.nullmsg = "Aucun voyage n'est prévu ...";
        }
      }

    });
  }

}
