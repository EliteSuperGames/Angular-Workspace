import { Routes } from '@angular/router';
import { DemographicsComponent } from './components/demographics/demographics.component';

export const routes: Routes = [
  {
    path: 'demographics',
    loadComponent: () =>
      import('./components/demographics/demographics.component').then(
        (m) => m.DemographicsComponent
      ),
  },
];
