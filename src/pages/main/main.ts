import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WhoIsWhatProvider } from '../../providers/whoIsWhat.provider';
import { Wohnung } from '../../models/wohnung.model';

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

  private addCreateHome: boolean;
  private wohnungen: Array<Wohnung>;

  constructor(
    private navCtrl: NavController,
    private wiwProvider: WhoIsWhatProvider
  ) {
    this.addCreateHome = true;
   }

   ionViewWillEnter(): void {
    this.wiwProvider.getWohnungen().then(wohnungen => this.wohnungen = wohnungen);
  }

  createHome() {
    this.navCtrl.push('CreateHomePage');
  }
}
