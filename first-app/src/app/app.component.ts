import { Component } from '@angular/core';
import { CounterService } from './playground/services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [CounterService],
})
export class AppComponent {
  showCard = false;
  showLifeCycle = false;
  counter = 0;
}
