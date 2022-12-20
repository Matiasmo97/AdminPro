import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs!: Subscription;

  constructor() {
    this.shouldObservable()
      .pipe(retry())
      .subscribe({
        next: (value) => console.log('Subs:', value),
        error: (error) => console.log('Subs: ', error),
        complete: () => console.log('Obs complete'),
      });

   this.intervalSubs = this.shouldInterval().subscribe(console.log);
  }

  shouldInterval(): Observable<number> {
    return interval(100).pipe(
      // take(10),
      map((value) => value + 1),
      filter((value) => value % 2 === 0)
    );
  }

  shouldObservable(): Observable<number> {
    let value = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        value++;
        observer.next(value);
        if (value === 4) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
