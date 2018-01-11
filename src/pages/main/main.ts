import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
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

  public wohnung: Wohnung;

  constructor(
    private navCtrl: NavController,
    private wiwProvider: WhereIsWhatProvider,
    private toaster: ToastController
  ) {}

  ionViewWillEnter(): void {
    this.wiwProvider.getWohnung().then(wohnung => this.wohnung = wohnung);
  }

  removeWohnung(): void{
    this.wiwProvider.removeWohnung();
    this.toaster.create({
      closeButtonText: 'X',
      dismissOnPageChange: false,
      cssClass: 'success',
      position: 'top',
      duration: 5000,
      message: 'Wohnung "' + this.wohnung.name + '" wurde entfernt.'
    }).present();
    this.navCtrl.push('MainPage');
  }

  public hasWohnung(): boolean{
    return this.wohnung !=null ? true : false;
  }

  createHome() {
    this.navCtrl.push('CreateHomePage');
  }
}
