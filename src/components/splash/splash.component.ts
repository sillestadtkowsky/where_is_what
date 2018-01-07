import { Component, Input } from '@angular/core';

import { Wohnung } from '../../models/wohnung.model';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'splash',
  templateUrl: 'splash.component.html'
})
export class SplashComponent {

    @Input()
    public value: Array<Wohnung>;

    constructor(
      private navCtl: NavController
    ) {}

    public openWohnung(wohnung: Wohnung): void {
      this.navCtl.push('ViewHomePage', wohnung);
    }

}
