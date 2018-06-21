import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetailPage } from '../detail/detail';
import { JeCrEMonComptePage } from '../je-cr-e-mon-compte/je-cr-e-mon-compte';

/**
 * Generated class for the JeMeConnectePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-je-me-connecte',
  templateUrl: 'je-me-connecte.html',
})
export class JeMeConnectePage {

  email : string;
  mdp : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JeMeConnectePage');
  }

  connexion() {
    console.log("In the connexion part");
    this.storage.get('infos').then((val) => {
      if (val!=null){
        console.log(val);
        var infos = JSON.parse(val);
        if (infos.email === this.email && infos.mdp == this.mdp){
          console.log("email and mdp are the same");
          this.navCtrl.push(DetailPage);
        }else{
          console.log("email ou mdp erroné");
          //console.log({}.toString.call(val).split(' ')[1].slice(0, -1).toLowerCase());
          //console.log("email = "+this.email);
          //console.log(val.email == "ismail.karchi@gmail.com");
        }
      }
    });
  }

  creer() {
    this.navCtrl.push(JeCrEMonComptePage);
  }

}
