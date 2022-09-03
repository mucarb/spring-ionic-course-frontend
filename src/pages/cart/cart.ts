import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from '../../models/cart-item';
import { ProductDTO } from '../../models/product.dto';
import { CartService } from '../../services/domain/cart.service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartItems: CartItem[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.cartItems = cart.items;
  }

  removeItem(product: ProductDTO) {
    this.cartItems = this.cartService.removeProduct(product).items;
  }

  increaseQuantity(product: ProductDTO) {
    this.cartItems = this.cartService.increaseQuantity(product).items;
  }

  decreaseQuantity(product: ProductDTO) {
    this.cartItems = this.cartService.decreaseQuantity(product).items;
  }

  total(): number {
    return this.cartService.total();
  }

  goOn() {
    this.navCtrl.setRoot('CategoryPage');
  }

  checkout() {
    this.navCtrl.push('PickAddressPage');
  }

}
