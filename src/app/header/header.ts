import { Component } from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [
    Menubar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    items: MenuItem[] = [
      {
        label: 'Christopher Wilson',
        url: '/',
        title: 'Homepage',
      },
      {
        label: 'Code Examples',
        title: 'Code Examples',
        items: [
          {
            label: 'Reactive Forms',
            title: 'A Reactive Form Example',
          }
        ]
      },
      {
        label: 'Page Examples',
        title: 'Examples of different pages implemented in Angular',
        items: [
          {
            label: 'Login Page',
            title: 'A login page example',
          },
          {
            label: 'Product Listing Pages',
            title: 'An example of products displayed in a grid'
          }
        ]
      },
      {
        label: 'Projects',
        title: 'Projects',
        url: '/projects',
      },
      {
        label: 'Links',
        title: 'External Links',
        items: [
          {
            label: 'GitHub',
            url: 'https://github.com/christopher-wilson/angular-demo/',
            icon: 'pi-github'
          },
          {
            label: 'LinkedIn',
            icon: 'pi-linkedin',
            url: 'https://www.linkedin.com/in/christopher-wilson-webdev/'
          }
        ]
      }
  ];
}
