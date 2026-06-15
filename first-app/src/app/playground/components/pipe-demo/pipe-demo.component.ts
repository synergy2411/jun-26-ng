import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  product = {
    title: 'iPhone 17 Pro',
    price: 12345.67891,
    qty: 199,
    launchDate: new Date('Sept 14, 2026'),
  };

  response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data arrived in app');
    }, 2000);
  });

  todoCollection = [
    { label: 'shopping', status: 'pending' },
    { label: 'planting', status: 'completed' },
    { label: 'insurance', status: 'pending' },
    { label: 'grocery', status: 'pending' },
  ];

  filteredStatus = '';
}
