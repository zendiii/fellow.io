import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class SchoolEvents {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  ExploreTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SchoolEvents, {
      item: item
    });
  }
}
