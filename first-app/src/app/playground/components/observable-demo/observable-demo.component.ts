import { Component } from '@angular/core';
import {
  filter,
  first,
  from,
  interval,
  map,
  Observable,
  skip,
  Subscription,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent {
  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('First Package'), 1500);
    setTimeout(() => observer.next('Second Package'), 3000);
    // setTimeout(() => observer.error(new Error('Something went wrong')), 4000);
    setTimeout(() => observer.next('Third Package'), 5000);
    setTimeout(() => observer.complete(), 7000);
  });

  unsub$!: Subscription;

  interval$ = interval(1000);

  friends = ['Monica', 'Ross', 'Rachel', 'Joey', 'Chandler'];

  friends$ = from(this.friends);

  onSubscribe() {
    this.unsub$ = this.obs$.pipe(map((value) => ' - ' + value)).subscribe({
      next: (data) => console.log('Data : ', data),
      error: (err) => console.error(err),
      complete: () => console.log('[COMPLETED]'),
    });
  }

  onUnsubscribe() {
    this.unsub$.unsubscribe();
  }

  onIntervalSubs() {
    this.unsub$ = this.interval$
      .pipe(
        tap((value) => console.log('[TAP]', value)),
        filter((value) => value % 2 == 0),
        tap((value) => console.log('[TAP AFTER FILTER]', value)),
        skip(1),
        tap((value) => console.log('[TAP AFTER SKIP]', value)),
        first(),
        tap((value) => console.log('[TAP AFTER FIRST]', value)),
        take(3),
      )
      .subscribe((data) => console.log(data));
  }

  onIntervalUnsub() {
    this.unsub$.unsubscribe();
  }

  onFromSubscribe() {
    this.friends$.subscribe(console.log);
  }
}
