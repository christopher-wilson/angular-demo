import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Home} from './home/home';
import {AboutPage} from './about-page/about-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutPage,
    title: 'About Page',
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound),
    title: 'Page Not Found',
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
