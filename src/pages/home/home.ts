import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../app/product.interface';
import { EapiService } from '../../app/eapi.service';
import { Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private eapiService: EapiService) {

  }

  onGetProducts() {
    this.eapiService.getProducts().subscribe(
    (products: Product[]) => this.products = products,
    (error: Response) => console.log(error)
  );
}

}
