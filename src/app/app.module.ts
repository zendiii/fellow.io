import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


import { Schedule } from '../pages/schedule/schedule';
import { CampusMap } from '../pages/campusMap/campusMap';
import { TabsPage } from '../pages/tabs/tabs';
import { Directories } from '../pages/directories/directories';
import { AC } from '../pages/academicComputing/academicComputing';
import { SchoolEvents } from '../pages/events/events';
import { Tpp } from '../pages/tpp/tpp';
import { SU } from '../pages/studentunion/studentunion';
import { Settings } from '../pages/settings/settings';
import { selectCampus } from '../pages/selectCampus/selectCampus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

const firebaseConfig = {
            apiKey: "AIzaSyDa9ZB3adiLAeib84Kc6WUE2mMXgdPZKOU",
            authDomain: "fellowfire-d9cac.firebaseapp.com",
            databaseURL: "https://fellowfire-d9cac.firebaseio.com",
            projectId: "fellowfire-d9cac",
            storageBucket: "fellowfire-d9cac.appspot.com",
            messagingSenderId: "26217645763"
};


@NgModule({
  declarations: [
    MyApp,
    Schedule,
    CampusMap,
    Directories,
      AC,
      Tpp,
      SU,
      Settings,
      SchoolEvents,
      selectCampus,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Schedule,
    CampusMap,
    Directories,
      SU,
      AC,
      Tpp,
      Settings,
      SchoolEvents,
      selectCampus,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
      Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
