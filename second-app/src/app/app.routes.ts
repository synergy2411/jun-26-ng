import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./components/counter/counter.component').then(
        (c) => c.CounterComponent,
      ),
  },
];
