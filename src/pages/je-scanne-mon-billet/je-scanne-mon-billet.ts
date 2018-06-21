import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { MesVoyagesPage } from '../mes-voyages/mes-voyages';
import { BilletinfosProvider } from '../../providers/billetinfos/billetinfos';
//import { MesVoyagesPage } from '../mes-voyages/mes-voyages';

@IonicPage()
@Component({
  selector: 'page-je-scanne-mon-billet',
  templateUrl: 'je-scanne-mon-billet.html',
})
export class JeScanneMonBilletPage {
  data ={};
  option : BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner, public storage: Storage, public billetinfosprovider: BilletinfosProvider) {
  }
  
  scan(){
    this.option ={
      //preferFrontCamera:true,
      prompt : "Veuillez scanner le QR code de votre billet..."
    };
    this.barcodeScanner.scan().then((barcodeData)=>{
      //console.log(barcodeData);
      //this.data = barcodeData;
      this.storage.get('infos').then((val) => {
        if (val!=null){
          //val.billets.push(barcodeData);
          if (val.billets != null){
            //val.billets.push(barcodeData);
            var infos = JSON.parse(val);
            infos.billets.push(barcodeData);   
            infos.pts += this.billetinfosprovider.getbilletpts(barcodeData);
            this.storage.set('infos', JSON.stringify(infos));
          }else{
            //val.billets = new Array();
            //var billets = JSON.parse(val.billets);
            //billets.push(barcodeData);
            //JSON.stringify(billets);
            //val.billets.push(barcodeData);
            var infos = JSON.parse(val);
            infos.billets.push(barcodeData);  
            infos.pts += this.billetinfosprovider.getbilletpts(barcodeData);          
            this.storage.set('infos', JSON.stringify(infos));            
          }
          console.log(val);
          this.navCtrl.push(MesVoyagesPage);
        }
      });
      //this.navCtrl.push(MesVoyagesPage);
    },(err)=>{
      console.log(err);
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JeScanneMonBilletPage');  
    this.storage.get('infos').then((val) => {
      console.log(val);
    }); 
  }

  

}
