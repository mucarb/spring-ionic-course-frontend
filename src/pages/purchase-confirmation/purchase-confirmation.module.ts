import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseConfirmationPage } from './purchase-confirmation';

@NgModule({
  declarations: [
    PurchaseConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseConfirmationPage),
  ],
})
export class PurchaseConfirmationPageModule {}
