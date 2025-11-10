import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Home} from './home/home';
import {AboutPage} from './about-page/about-page';
import {Projects} from './projects/projects';

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
    path: 'projects',
    loadComponent: () => import('./projects/projects')
      .then(c => c.Projects),
    title: 'Projects',
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
