import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = signal(0); // Writable Signal

  doubleCounter = computed(() => this.counter() * 2); // Readable Signals

  constructor() {
    effect(() => console.log('Value of Counter : ', this.counter()));
  }

  onIncrease() {
    // this.counter += 1;   // NEVER UPDATE SIGNAL LIKE THIS
    this.counter.update((prevValue) => prevValue + 1);
  }

  onDecrease() {
    this.counter.update((ctr) => ctr - 1);
  }

  onReset() {
    this.counter.set(0);
  }
}
