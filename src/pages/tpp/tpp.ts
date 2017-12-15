import { Component } from '@angular/core';
import { CampusMap } from '../campusMap/campusMap'
import { NavController } from 'ionic-angular';
import{ LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



@Component({
  selector: 'page-tpp',
  templateUrl: 'tpp.html'

})
export class Tpp {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public CampusMap: CampusMap, public geolocation: Geolocation) {

  }

presentLoading(){
    let loader =this.loadingCtrl.create({
        spinner: "dots",
        content: "Finding Buildings...",
        duration: 3000
    });
    loader.present();
}

  RouteTapped(event, item) {
    this.navCtrl.push(CampusMap, {
      item: item,
    });

  }

    goBack() {
    this.navCtrl.pop();
}


}
