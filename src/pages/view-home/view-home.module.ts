import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewHomePage } from './view-home';

@NgModule({
  declarations: [
    ViewHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewHomePage),
  ],
})
export class ViewHomePageModule {}
