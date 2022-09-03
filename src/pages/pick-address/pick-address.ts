import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressDTO } from '../../models/address.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  adresses: AddressDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.adresses = [
      {
        id: '1',
        publicPlace: 'Rua Belem',
        number: '2485',
        complement: 'Quadra 24',
        neighborhood: 'Jardim Real',
        zipCode: '19470000',
        city: {
          id: '1',
          name: 'Presidente Epitácio',
          state: {
            id: '1',
            name: 'São Paulo'
          }
        }
      },
      {
        id: '2',
        publicPlace: 'Rua Belem',
        number: '2485',
        complement: 'Quadra 24',
        neighborhood: 'Jardim Real',
        zipCode: '19470000',
        city: {
          id: '1',
          name: 'Presidente Epitácio',
          state: {
            id: '1',
            name: 'São Paulo'
          }
        }
      }
    ];
  }

}
