import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditHomePage } from './edit-home';

@NgModule({
  declarations: [
    EditHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EditHomePage),
  ],
})
export class EditHomePageModule {}
