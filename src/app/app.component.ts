import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',

})
export class MyApp {
//put first time campus selection page
  rootPage:any = TabsPage;

  constructor(platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen) {



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


 // let status bar overlay webview
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.styleLightContent();

}


}
