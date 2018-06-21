import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MesVoyagesPage } from '../mes-voyages/mes-voyages';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  nom : string;
  prenom : string;
  date_nais : string;
  num_tel : string;
  email : string;
  mdp : string;
  billets: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  saveForm(){
    this.storage.get('infos').then((val) =>{
      if (val!=null){
        var infos = JSON.parse(val);
        infos.nom = this.nom;
        infos.prenom = this.prenom;
        infos.date_nais = this.date_nais;
        infos.num_tel = this.num_tel;
        infos.email = this.email;
        infos.mdp = this.mdp

        this.storage.set('infos', JSON.stringify(infos));
        this.navCtrl.push(MesVoyagesPage);
      } else {
        console.log('How did you got here in the first place ??')
      }
    });
  }  

}
