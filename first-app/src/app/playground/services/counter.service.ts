import { Injectable } from '@angular/core';

// Tree-shakable
@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = 0;

  constructor() {}

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  reset() {
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }
}
