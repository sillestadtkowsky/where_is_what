import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Die Main Page ist die erste Seite welche angezeigt wir.
 * Eventuell wurde bereits eine Wohnung angelegt,
 * oder es wird die Erzeugung einer Wohnung vorgeschlagen.
*/
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController) { }

  createHome() {
    this.navCtrl.push('CreateHomePage');
  }

  viewHome() {
    this.navCtrl.push('ViewHomePage');
  }
}
