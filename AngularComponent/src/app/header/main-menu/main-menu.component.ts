import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  mainMenuItems: string[] = [
    'Home',
    'Product',
    'Sale',
    'New Arrival',
    'Contact',
    'Service',
  ];

  constructor() {}

  ngOnInit(): void {}
}
