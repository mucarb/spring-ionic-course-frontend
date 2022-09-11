import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseService } from '../../services/domain/purchase.service';
import { PurchaseConfirmationPage } from './purchase-confirmation';

@NgModule({
  declarations: [
    PurchaseConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseConfirmationPage),
  ],
  providers: [
    PurchaseService,
  ]
})
export class PurchaseConfirmationPageModule { }
