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
  mode_access : string;
  email : string;
  mdp : string;
  billets: any[];

  infos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.storage.get('infos').then((val) =>{
      if (val!=null){
        this.infos = JSON.parse(val);
        
        this.nom = this.infos.nom;
        this.prenom = this.infos.prenom;
        this.date_nais = this.infos.date_nais;
        this.num_tel = this.infos.num_tel;
        this.mode_access = this.infos.mode_access;
        this.email = this.infos.email;
        this.mdp = this.infos.mdp;
        
        console.log(this.infos);
      } else {
        console.log('How did you got here in the first place ??')
      }
    });
  }

  saveForm(){
    this.infos.nom = this.nom;
    this.infos.prenom = this.prenom;
    this.infos.date_nais = this.date_nais;
    this.infos.num_tel = this.num_tel;
    this.infos.mode_access = this.mode_access;
    this.infos.email = this.email;
    this.infos.mdp = this.mdp

    this.storage.set('infos', JSON.stringify(this.infos));    
    this.navCtrl.push(MesVoyagesPage);
  }  

}
