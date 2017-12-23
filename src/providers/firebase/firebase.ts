import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getCampuses() {
    return this.afd.list('/selectCampus/');
  }

//  addItem(name) {
//    this.afd.list('/shoppingItems/').push(name);
//  }

//  removeItem(id) {
//    this.afd.list('/shoppingItems/').remove(id);
//  }
}
