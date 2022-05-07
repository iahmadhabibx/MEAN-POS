import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from 'src/app/services/messagePassing.service';
import { SHARED_DATA } from 'src/app/shared/sharedData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  User: any = SHARED_DATA.USER;
  modalMessage: any;

  constructor(private messageService: MessagePassingService) { }

  ngOnInit(): void {
    this.messageService.onReceiveConfirmBoxMessage().subscribe(message => {
      if (message && message.type === 'logout')
        this.modalMessage = message;
      else
        this.modalMessage = null;
    })
  }

}
