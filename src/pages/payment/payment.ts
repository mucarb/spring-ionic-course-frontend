import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseDTO } from '../../models/purchase.dto';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  purchase: PurchaseDTO;

  installments: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuild: FormBuilder,) {
    this.purchase = this.navParams.get('purchase');
    this.formGroup = this.formBuild.group({
      numberInstallments: [1, Validators.required],
      '@type': ['cardPayment', Validators.required],
    });
  }

  nextPage() {
    this.purchase.payment = this.formGroup.value;
    this.navCtrl.setRoot('PurchaseConfirmationPage', { purchase: this.purchase });
  }

}
