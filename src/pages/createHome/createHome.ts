import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Wohnung } from '../../models/wohnung.model';
import { WhoIsWhatProvider } from '../../providers/whoIsWhat.provider';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-createHome',
  templateUrl: 'createHome.html'
})
export class CreateHomePage {

  private name: string;
  private form: FormGroup;
  private wohnungen: Array<Wohnung>;

  constructor(
    private wiwProvider: WhoIsWhatProvider,
    private toaster: ToastController
  ) {
    
    this.form = new FormGroup({ 
      homeName: new FormControl(), 
      info:new FormControl()
    });

    this.name = "?"
  }

  ionViewWillEnter(): void {
    this.wiwProvider.getWohnungen().then(wohnungen => this.wohnungen = wohnungen);
  }

  public addHome() : void {

    this.wiwProvider.createWohnung(new Wohnung(this.form.controls['homeName'].value))
      .then(wohnung => {
        this.form.reset();
        this.wohnungen.push(wohnung);
        this.toaster.create({
          closeButtonText: 'X',
          dismissOnPageChange: true,
          cssClass: 'success',
          position: 'top',
          message: 'Wohnung "' + wohnung.name + '" wurde erzeugt.'
        }).present();
      })
      .catch(error => {
        this.toaster.create({
          closeButtonText: 'X',
          dismissOnPageChange: true,
          cssClass: 'error',
          duration: 5000,
          position: 'top',
          message: 'Es ist ein Fehler aufgetreten: ' + JSON.stringify(error)
        }).present();
        console.error(error);
      });
  }
}
