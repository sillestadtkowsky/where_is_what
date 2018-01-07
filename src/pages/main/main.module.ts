import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MainPage } from './main';
import { WohnungenComponent } from '../../components/wohnungen/wohnungen.component';

@NgModule({
  declarations: [
    MainPage,
    WohnungenComponent
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    TranslateModule.forChild()
  ],
  exports: [
    MainPage
  ]
})
export class MainPageModule { }
