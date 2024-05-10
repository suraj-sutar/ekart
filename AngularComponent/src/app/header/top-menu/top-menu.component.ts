import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  topMenuItem: string[] = [
    'Help',
    'Exchange & Returns',
    'Order Tracker',
    'SignUp/Login',
  ];

  constructor() {}

  ngOnInit(): void {}
}
