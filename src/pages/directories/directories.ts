import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AC } from '../academicComputing/academicComputing';
import { Tpp } from '../tpp/tpp';
import { SU } from '../studentunion/studentunion';
import firebase from 'firebase';


@Component({
  selector: 'page-directories',
  templateUrl: 'directories.html'
})
export class Directories {
//DirectoriesRef: any;
//directoriesList: any;
//loadedDirectoriesList: any;
//    items;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.initializeItems();
  }
      
//initializeItems() {
//    this.items = [
//      'Academic Computing Center',
//      'Academic Support',
//      'Center Building',
//      'Communications and Humanities Building',
//      'Construction/Industrial Applied Technology Building',
//      'Computer Technology Building',
//      'Dental Hygiene',
//      'English Building',
//      'Fine and Performing Arts Center',
//      'History and Social Sciences',
//      'Library',
//      'Learning Commons',
//      'Lifetime Sports Complex', 'ls', 'LS',
//      'Moore Lecture Hall',
//      'Science and Mathematics',
//      'Science and Mathematics Annex',
//      'Support Services',
//      'Student Union', 'su', 'SU',
//      'Technology and Professional Programs',
//      'University Center',
//      'University Center Annex',
//      'Workforce Development'   
//    ];
  //}
      
//  getItems(ev) {
    // Reset items back to all of the items
//    this.initializeItems();

    // set val to the value of the searchbar
//    let val = ev.target.value;

    // if the value is an empty string don't filter the items
//    if (val && val.trim() != '') {
//      this.items = this.items.filter((item) => {
//        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//      })
//    }
//  }
    
//click events
  ACTapped(event, item) {
    this.navCtrl.push(AC, {
      item: item
    });
  }
    
  tppTapped(event, item) {
    this.navCtrl.push(Tpp, {
      item: item
    });
  }
    
  SUTapped(event, item) {
    this.navCtrl.push(SU, {
      item: item
    });
  }

  }
    
    
    



