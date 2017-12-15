import { Component } from '@angular/core';
import { CampusMap } from '../campusMap/campusMap';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-studentunion',
  templateUrl: 'studentunion.html'
  
})
export class SU {

  constructor(public navCtrl: NavController) {

  }

      RouteTapped(event, item) {
    this.navCtrl.push(CampusMap, {
      item: item
    });
  }
    
}
