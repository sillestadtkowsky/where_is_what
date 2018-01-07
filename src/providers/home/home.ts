import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class Home {
  alertCtrl: any;
  private HOME_KEY: string = '_home';

  name: any;

  constructor(public storage: Storage, defaults: any, alertCtrl: AlertController) {
    this.name = defaults;
    let alert = this.alertCtrl.create({
      title: "Wohnung erzeugt",
      subTitle: "Name: ",
      buttons: ['ok']
    });
    alert.present();
  }

  load() {
    return this.storage.get(this.HOME_KEY).then((value) => {
      if (value) {
        this.name = value;
      }
    });
  }

  setAll(value: any) {
    return this.storage.set(this.HOME_KEY, value);
  }

  save() {
    return this.setAll(this.name);
  }
}
