import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/shared/interfaces';

@Component({
  selector: 'head-component',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  date: any;
  routes: IRoute[] = [
    { name: 'Home', routerLink: '/' },
    { name: 'Currency', routerLink: '/currency' },
    { name: 'Weather', routerLink: '/weather' },
  ];

  constructor() {
    this.date = new Date().toDateString();
  }

  ngOnInit(): void {}
}
