import {Component, OnInit} from '@angular/core';
import {Header} from './header/header';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title: string | any = '';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.routeConfig?.title ?? '';
  }
}
