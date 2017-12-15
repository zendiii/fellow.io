import { Component } from '@angular/core';
import { CampusMap } from '../campusMap/campusMap'
import { NavController } from 'ionic-angular';
import { selectCampus } from '../selectCampus/selectCampus';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
  
})
export class Settings {

  constructor(public navCtrl: NavController) {

  }

  changeCampus(event, item) {
    this.navCtrl.push(selectCampus, {
      item: item
    });
  }


}
