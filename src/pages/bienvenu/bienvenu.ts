import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-bienvenu',
  templateUrl: 'bienvenu.html',
})
export class BienvenuPage {

  infos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenuPage');
    this.storage.get('infos').then((val) => {
       if(val!=null){
         this.infos = val;
       }     
    });
  }

}
