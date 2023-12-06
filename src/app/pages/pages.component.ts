import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

function customInitFunction(): any {
  // Your function logic here
  return /* Your return value */;
}


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent {



  constructor( private settingsService: SettingsService ){

  }

  ngOnInit(){
    customInitFunction();
  }
}
