import { Component } from '@angular/core';

import { CampusMap } from '../campusMap/campusMap';
import { Tpp } from '../tpp/tpp';
import { Schedule } from '../schedule/schedule';
import { Directories } from '../directories/directories';
import { AC } from '../academicComputing/academicComputing';
import { SchoolEvents } from '../events/events';
import { SU } from '../studentunion/studentunion';
import { Settings } from '../settings/settings';
import { selectCampus } from '../selectCampus/selectCampus';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
    tab1Root: any = CampusMap;
    //  tab2Root: any = Directory;
    tab4Root: any = AC;
    tab3Root: any = Schedule;
    tab2Root: any = Directories;
    tab5Root: any = SchoolEvents;
    tab6Root: any = Tpp;
    tab7Root: any = SU;
    tab8Root: any = Settings;
    tab9root: any = selectCampus;
  
}
