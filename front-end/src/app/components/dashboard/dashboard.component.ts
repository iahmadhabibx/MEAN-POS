import { Component, OnInit } from '@angular/core';
import { SHARED_DATA } from 'src/app/shared/sharedData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  User:any = SHARED_DATA.USER;
  constructor() { }

  ngOnInit(): void {
  }

}
