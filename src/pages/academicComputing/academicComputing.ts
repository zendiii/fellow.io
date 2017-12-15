import { Component } from '@angular/core';
import { CampusMap } from '../campusMap/campusMap'
import { NavController } from 'ionic-angular';
import{ LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-academicComputing',
  templateUrl: 'academicComputing.html'
  
})
export class AC {

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
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
            item: item
        });
    }

    pushPage(){
        this.navCtrl.push(CampusMap);
    }
}
