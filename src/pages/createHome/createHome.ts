import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-createHome',
  templateUrl: 'createHome.html'
})
export class CreateHomePage {
  name: string;
  constructor() {
    this.name = "?"
  }
}
