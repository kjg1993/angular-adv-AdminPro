// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: []
// })
// export class HeaderComponent {

// }
import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTheme: string = 'default';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.applyTheme(storedTheme);
    }
  }

  applyTheme(theme: string) {
    const element = this.el.nativeElement.querySelector('.header-container'); // Replace with your specific header element selector
    if (element) {
      this.renderer.removeClass(element, 'theme-' + this.currentTheme);
      this.renderer.addClass(element, 'theme-' + theme);
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
    }
  }
}


