import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetailPage } from '../detail/detail';
import { JeCrEMonComptePage } from '../je-cr-e-mon-compte/je-cr-e-mon-compte';
import { AlertController } from 'ionic-angular';

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
  cnt: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JeMeConnectePage');
    this.storage.get('infos').then((val) =>{
      if (val!=null){
        this.cnt = true;
        //console.log("true");
      }else{
        this.cnt = false;
        //console.log("false");
      }
    });
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
          let alert = this.alertCtrl.create({
            title: 'infos error',
            subTitle: 'email ou mdp erroné',
            buttons: ['Dismiss']
          });
          alert.present();
          //console.log({}.toString.call(val).split(' ')[1].slice(0, -1).toLowerCase());
          //console.log("email = "+this.email);
          //console.log(val.email == "ismail.karchi@gmail.com");
        }
      }else{
        let alert = this.alertCtrl.create({
          title: "No infos",
          subTitle: "Aucun utilisateur enregistré",
          buttons: ["Dismiss"]
        });
        alert.present();
      }
    });
  }

  creer() {
    this.navCtrl.push(JeCrEMonComptePage);
  }

}
