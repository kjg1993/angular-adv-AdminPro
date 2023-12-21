import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: []
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string = '';
  public titleSubs$: Subscription; // Correctly defining the Subscription instance

  constructor(private router: Router) {
    this.titleSubs$ = this.getDataRoute().subscribe(({ title }) => {
      this.title = title || 'Título Vacío';
      document.title = `Admin-Pro - ${title}`;
    });
  }
  
  getDataRoute() {
    return this.router.events
      .pipe(
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }
   
  ngOnDestroy(): void {
    // Ensure to unsubscribe from the subscription to prevent memory leaks
  
      this.titleSubs$.unsubscribe();

  }
}
