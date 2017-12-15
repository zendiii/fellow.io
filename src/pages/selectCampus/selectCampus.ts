import { Component } from '@angular/core';


import { NavController } from 'ionic-angular';
import{ LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';




@Component({
  selector: 'page-selectCampus',
  templateUrl: 'selectCampus.html'

})
export class selectCampus {



  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,  public geolocation: Geolocation) {

  }

presentLoading(){
    let loader =this.loadingCtrl.create({
        spinner: "dots",
        content: "Indexing Places",
        duration: 3000
    });
    loader.present();
}


    goBack() {
    this.navCtrl.pop();
}


}
