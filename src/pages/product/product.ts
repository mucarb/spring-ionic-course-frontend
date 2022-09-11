import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/product.dto';
import { ProductService } from '../../services/domain/product.service';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: ProductDTO[] = [];

  page: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    let category_id = this.navParams.get('categoryId');
    let loader = this.presentLoading();
    this.productService.findByCategory(category_id, this.page, 10)
      .subscribe(response => {
        loader.dismiss();
        this.products = this.products.concat(response['content']);
        console.log(this.page);
        console.log(this.products);
      }, error => {
        loader.dismiss();
      });
  }

  showDetail(productId: string) {
    this.navCtrl.push('ProductDetailPage', { productId: productId });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present();
    return loader;
  }

  doRefresh(refresher) {
    this.page = 0;
    this.products = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

}
