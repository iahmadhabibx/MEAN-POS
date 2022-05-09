import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagePassingService } from 'src/app/services/messagePassing.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input() messageObject: any;

  constructor(private messageService: MessagePassingService, private router: Router) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.messageService.passMessageToConfirmBox(null, null, null);
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  onReject() {
    this.messageService.passMessageToConfirmBox(null, null, null);
  }

}
