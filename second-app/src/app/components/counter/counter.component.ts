import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = signal(0);

  onIncrease() {
    // this.counter += 1;
    this.counter.update((prevValue) => prevValue + 1);
  }
}
