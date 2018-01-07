import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Wohnung } from '../../models/wohnung.model';

/**
 * Generated class for the ViewHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-home',
  templateUrl: 'view-home.html',
})
export class ViewHomePage {

  private wohnung: Wohnung;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
      this.wohnung = this.navParams.data;
  }

  ionViewWillEnter() {}

  ionViewDidLoad() {
  }

}
