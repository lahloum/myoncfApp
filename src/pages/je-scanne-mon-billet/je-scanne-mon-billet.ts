import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the JeScanneMonBilletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-je-scanne-mon-billet',
  templateUrl: 'je-scanne-mon-billet.html',
})
export class JeScanneMonBilletPage {
  data ={};
  option : BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {
  }


  scan(){
    this.option ={
      //preferFrontCamera:true,
      prompt : "Please scanne your barcode"
    };
    this.barcodeScanner.scan().then((barcodeData)=>{
     console.log(barcodeData);
     
     this.data = barcodeData;
    },(err)=>{
      console.log(err);
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JeScanneMonBilletPage');
  }

}
