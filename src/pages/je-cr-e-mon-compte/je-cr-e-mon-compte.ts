import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JeScanneMonBilletPage } from '../je-scanne-mon-billet/je-scanne-mon-billet';


@IonicPage()
@Component({
  selector: 'page-je-cr-e-mon-compte',
  templateUrl: 'je-cr-e-mon-compte.html',
})
export class JeCrEMonComptePage {

  nom : string;
  prenom : string;
  email : string;
  mdp : string;
  billets: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JeCrEMonComptePage');
  }

  saveForm(){
    let infos = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      mdp: this.mdp,
      billets: new Array()
    }

    infos.billets.push('Billet0');     
    //console.log(infos);
    this.storage.set('infos', JSON.stringify(infos));    
    this.navCtrl.push(JeScanneMonBilletPage); 
  }  
}
