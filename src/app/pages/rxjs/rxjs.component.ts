import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent implements OnDestroy{ 

 public intervalSubs: Subscription;

  constructor(){

    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   value => console.log('Sub:', value),
    //   error => console.warn('Error:', error),
    //   () => console.log('Completed')
    // ); 

    this.intervalSubs = this.returnInterval().subscribe( console.log);
    
}

  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe();
  }


returnInterval(): Observable<number>{
  return interval(500)
                    .pipe(
                      map( value => value + 1),
                      //filter(value => (value % 2 === 1 ) ? true: false), // impar
                      filter(value => (value % 2 === 0) ? true: false),
                      //take(10), 
                    );

  
}

returnObservable(): Observable<number> {
  let i = -1;

  const obs$ = new Observable<number>(observer => {
    const interval = setInterval(() => {
      i++;
      observer.next(i);
  
      if (i === 4) {
        clearInterval(interval);
        observer.complete();
      }
  
      if (i === 2) {
        console.log('i = 2... error');
        observer.error('i got to value 2');
      }
    }, 1000);
  });
  
  return obs$;
}

}