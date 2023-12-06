import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent implements OnInit {

 // public linkTheme = document.querySelector('#theme')
  
  constructor( private settingsServices: SettingsService) {
    
  }
  
  ngOnInit(): void {
    // this.linkTheme = document.querySelector('#theme');
    //this.links = document.querySelectorAll(".selector");
    this.settingsServices.checkCurrentTheme();
  }

  changeTheme(theme: string){
   //console.log(theme);
   this.settingsServices.changeTheme(theme);
   // this.settingsServices.checkCurrentTheme();
  }


}

