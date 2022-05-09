import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from 'src/app/services/messagePassing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  storeLogo = "https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png";
  selected: number = 0;

  constructor(private messageService: MessagePassingService) { }

  ngOnInit(): void {
  }

  logoutUser() { 
    this.messageService.passMessageToConfirmBox("Please Confrim", "Are you sure you want to logout?", "logout");
  }
}
