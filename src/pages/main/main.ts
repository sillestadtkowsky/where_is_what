import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WhereIsWhatProvider } from '../../providers/whereIsWhat.provider';
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

  public wohnungen: Array<Wohnung>;

  constructor(
    private navCtrl: NavController,
    private wiwProvider: WhereIsWhatProvider
  ) {}

  ionViewWillEnter(): void {
    this.wiwProvider.getWohnungen().then(wohnungen => this.wohnungen = wohnungen);
  }

  public hasWohnung(): boolean{
      return this.wohnungen && this.wohnungen.length > 0;
  }

  createHome() {
    this.navCtrl.push('CreateHomePage');
  }
}
