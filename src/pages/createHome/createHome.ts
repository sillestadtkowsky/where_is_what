import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
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
  form: FormGroup;

  constructor() {
    
    this.form = new FormGroup({ 
      homeName: new FormControl(), 
      info:new FormControl()
    });
    this.name = "?"
  }

  addHome() {
    alert("Wohnung " + this.form.controls['homeName'].value + " wurde erzeugt.");
  }
}
