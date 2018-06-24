import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JeScanneMonBilletPage } from '../je-scanne-mon-billet/je-scanne-mon-billet';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-je-cr-e-mon-compte',
  templateUrl: 'je-cr-e-mon-compte.html',
})
export class JeCrEMonComptePage {

  nom : string;
  prenom : string;
  date_nais : string;
  num_tel : string;
  mode_access : string;
  email : string;
  mdp : string;
  billets: any[];
  pts: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {
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
      billets: new Array(),
      pts: 0
    }

    let alert = this.alertCtrl.create({
      title: 'infos error',
      subTitle: '',
      buttons: ['Dismiss']
    });

    if(this.nom!=undefined && this.nom.length!=0 && this.nom!=""){
      if(this.prenom!=undefined && this.prenom.length!=0 && this.prenom!=""){
        if(this.email!=undefined && this.email.length!=0 && this.email!=""){
          if(this.mdp!=undefined && this.mdp.length!=0 && this.mdp!=""){
            this.storage.set('infos', JSON.stringify(infos));    
            this.navCtrl.push(JeScanneMonBilletPage); 
          }else{
            alert.setSubTitle('Mot de passe non informé');
            alert.present();            
          }          
        }else{
          alert.setSubTitle('Email non informé');
          alert.present();
        }
      }else{
        alert.setSubTitle('Prénom non informé');
        alert.present();
      }
    }else{
      alert.setSubTitle('Nom non informé');
      alert.present();
    }
    //infos.billets.push('Billet0');     
    //console.log(infos);    
  }  
}
