import { Routes } from '@angular/router';
import {Home} from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module')
      .then(m => m.FormsModule),

  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-page/about-page').then(m => m.AboutPage),
    title: 'About Me'
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound),
    title: 'Page Not Found',
  }
];
