import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/product.dto';
import { ProductService } from '../../services/domain/product.service';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  product: ProductDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService) {
  }

  ionViewDidLoad() {
    let productId = this.navParams.get('productId');
    this.productService.findById(productId)
      .subscribe(response => {
        this.product = response;
      }, error => { });
  }

}
