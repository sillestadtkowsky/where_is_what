import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

import { Wohnung } from '../../models/wohnung.model';

@IonicPage()
@Component({
  selector: 'page-view-home',
  templateUrl: 'view-home.html',
})
export class ViewHomePage {

  public wohnung: Wohnung;

  constructor(
    private navParams: NavParams, private navCtrl: NavController,) {
      this.wohnung = this.navParams.data;
  }

  ionViewWillEnter() {}

  ionViewDidLoad() {
  }

  editHome(){
    this.navCtrl.push('EditHomePage');
  }
  get gegenstandCount() : number {
      let result = 0;

      if(this.wohnung && this.wohnung.raeume) {
        this.wohnung.raeume.forEach(raum => {
          raum.schraenke.forEach(schrank => {
            result += schrank.gegenstaende.length;
          });
        });
      }

      return result;
  }
}
