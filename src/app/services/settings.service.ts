import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme')
  constructor() { 
    console.log('Account Setting Services!')
     // ./assets/css/colors/default-dark.css
     const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
     this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string){
    //console.log(theme);
    
     const url = `./assets/css/colors/${ theme }.css`
     //console.log(url);
 
     this.linkTheme?.setAttribute('href', url);
 
     localStorage.setItem('theme', url);
     this.checkCurrentTheme();
    
   }

   checkCurrentTheme(){

    const links =  document.querySelectorAll(".selector");

      links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const themeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if( themeUrl  === currentTheme) {
        element.classList.add('working');
      }
    })
  }
 
}
