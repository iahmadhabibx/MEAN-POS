import { Component, OnInit } from '@angular/core';
import { SHARED_DATA } from 'src/app/shared/sharedData';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent implements OnInit {
  currentGrid = 0;
  isLogin = SHARED_DATA.authentication.isLogin;
  constructor() { }

  ngOnInit(): void {
  }
  tabSwitched(event: any) {
    const { index } = event;
    this.currentGrid = index;
  }
}
