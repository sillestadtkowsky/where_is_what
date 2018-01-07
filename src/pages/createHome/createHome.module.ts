import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateHomePage } from './createHome';
import { WohnungenComponent } from '../../components/wohnungen/wohnungen.component';

@NgModule({
  declarations: [
    CreateHomePage,
    WohnungenComponent
  ],
  imports: [
    IonicPageModule.forChild(CreateHomePage),
    TranslateModule.forChild()
  ],
  exports: [
    CreateHomePage
  ]
})
export class CreateHomePageModule { }
