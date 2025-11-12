import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages-module')
      .then(m => m.PagesModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./examples-forms/examples-forms-module')
      .then(m => m.ExamplesFormsModule),

  },
  {
    path: 'pages',
    loadChildren: () => import('./examples-pages/examples-pages-module')
      .then(m => m.ExamplesPagesModule),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    title: 'Page Not Found',
    data: {
      statusCode: 404,
    }
  }
];
