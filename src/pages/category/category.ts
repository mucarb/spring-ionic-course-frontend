import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryDTO } from '../../models/category.dto';
import { CategoryService } from '../../services/domain/category.service';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories: CategoryDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoryService: CategoryService) {
  }

  ionViewDidLoad() {
    this.categoryService.findAll()
      .subscribe((response) => {
        this.categories = response;
      }, (error) => { });
  }

  showProducts() {
    this.navCtrl.push('ProductPage');
  }

}
