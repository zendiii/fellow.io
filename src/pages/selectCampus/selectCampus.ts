import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';




@Component({
  selector: 'page-selectCampus',
  templateUrl: 'selectCampus.html'

})
export class selectCampus {



  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  goToHome(){
      this.navCtrl.setRoot('CampusMap');
    }




}
