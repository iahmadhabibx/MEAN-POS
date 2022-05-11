import { Component, OnInit } from '@angular/core';
import { SHARED_DATA } from 'src/app/shared/sharedData';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  connectedUser:any = {};

  constructor() { }

  ngOnInit(): void {
    // To be replaced with DB call
    this.connectedUser.profileImage = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg";
  }

}
