import {Component, inject, input} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Router} from 'express';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterLink
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
    messageBody: string | null = null;
    messageTitle: string | null = null;
    statusCode: string | null = null;

    private activatedRoute = inject(ActivatedRoute);

    constructor() {
      this.activatedRoute.data.subscribe((data) => {
        this.statusCode = data['statusCode'];
      })

      console.log(this.statusCode)

      switch (this.statusCode) {
        case '404': this.pageIsNotFound(); break;
        default: this.pageIsUnderConstruction();
      }
    }

    pageIsNotFound(): void {
      this.messageTitle = 'Page not found';
      this.messageBody = 'This page does not seem to exit';
    }

    pageIsUnderConstruction(): void {
      this.messageTitle = 'Under construction';
      this.messageBody = 'This page is currently under construction';
    }
}
