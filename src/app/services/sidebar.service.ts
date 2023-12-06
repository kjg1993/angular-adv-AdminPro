import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title:'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/'},
        { titulo: 'ProgessBar', url: 'progress'},
        { titulo: 'Graphica', url: 'grafica1'}
      ]

    }
  ];

  constructor() { }
}
