import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagePassingService } from './services/messagePassing.service';
import { SHARED_DATA } from './shared/sharedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  User: any = SHARED_DATA.USER;
  modalMessage: any;

  constructor(private router: Router, private messageService: MessagePassingService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("angularToken");
    if (token)
      this.router.navigate(["dashboard"])
    this.messageService.onReceiveConfirmBoxMessage().subscribe(message => {
      if (message && message.type === 'logout')
        this.modalMessage = message;
      else
        this.modalMessage = null;
    })
  }
}
