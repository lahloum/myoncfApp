import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BilletinfosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BilletinfosProvider Provider');
  }

  getbilletinfos(code) {
    // Fonction pour décoder le code billet

    let binfos = {
      depart: "Casa Port",
      arrivee: "Rabat Agdal",
      date: "21/06/2018",
      prix: "37",
      time: "08:15"
    };

    return binfos;
  }

  getbilletpts(code) {
    //Fonction pour les pts de chaque billet

    return 37;
  }
}
