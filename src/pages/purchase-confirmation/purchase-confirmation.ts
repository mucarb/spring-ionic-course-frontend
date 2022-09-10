import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressDTO } from '../../models/address.dto';
import { CartItem } from '../../models/cart-item';
import { CustomerDTO } from '../../models/customer.dto';
import { PurchaseDTO } from '../../models/purchase.dto';
import { CartService } from '../../services/domain/cart.service';
import { CustomerService } from '../../services/domain/customer.service';

@IonicPage()
@Component({
  selector: 'page-purchase-confirmation',
  templateUrl: 'purchase-confirmation.html',
})
export class PurchaseConfirmationPage {

  purchase: PurchaseDTO;
  cartItems: CartItem[];
  customer: CustomerDTO;
  address: AddressDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public customerService: CustomerService) {
    this.purchase = this.navParams.get('purchase');
  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items;
    this.customerService.findById(this.purchase.customer.id)
      .subscribe(response => {
        this.customer = response as CustomerDTO;
        this.address = this.findAddress(this.purchase.deliveryAddress.id, response['adresses']);
      }, error => {
        this.navCtrl.setRoot('HomePage');
      });
  }

  private findAddress(id: string, list: AddressDTO[]): AddressDTO {
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }

  total() {
    return this.cartService.total();
  }

}
