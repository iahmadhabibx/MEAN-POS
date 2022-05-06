import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = [
    {id: 1, title: "Home", icon: "../../../assets/svg/icons.svg#home"},
    {id: 2, title: "Menu", icon: "../../../assets/svg/icons.svg#menu"},
    {id: 3, title: "History", icon: "../../../assets/svg/icons.svg#history"},
    {id: 4, title: "Promos", icon: "../../../assets/svg/icons.svg#promos"},
    {id: 5, title: "Settings", icon: "../../../assets/svg/icons.svg#settings"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
