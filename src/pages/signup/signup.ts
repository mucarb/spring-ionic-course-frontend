import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityDTO } from '../../models/city.dto';
import { StateDTO } from '../../models/state.dto';
import { CityService } from '../../services/domain/city.service';
import { StateService } from '../../services/domain/state.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  states: StateDTO[];
  cities: CityDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cityService: CityService,
    public stateService: StateService) {
    this.formGroup = formBuilder.group({
      name: ['Rodrigo Oliveira', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['rodrigo@gmail.com', [Validators.required, Validators.email]],
      type: ['1', [Validators.required]],
      cpfOrCnpj: ['71070730017', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      password: ['12345', [Validators.required]],
      publicPlace: ['Rua Aracaju', [Validators.required]],
      number: ['1824', [Validators.required]],
      complement: ['', []],
      neighborhood: ['', []],
      zipCode: ['19470000', [Validators.required]],
      phone1: ['18981389624', [Validators.required]],
      phone2: ['', []],
      phone3: ['', []],
      stateId: [null, [Validators.required]],
      cityId: [null, [Validators.required]],
    });
  }

  ionViewDidLoad() {
    this.stateService.findAll()
      .subscribe(response => {
        this.states = response;
        this.formGroup.controls.stateId.setValue(this.states[0].id);
        this.updateCities();
      }, error => { });
  }

  updateCities() {
    let stateId = this.formGroup.value.stateId;
    this.cityService.findAll(stateId)
      .subscribe(response => {
        this.cities = response;
        this.formGroup.controls.cityId.setValue(null);
      }, error => { });
  }

  signupUser() {
  }

}
