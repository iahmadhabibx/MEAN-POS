import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from "crypto-js";
import Notiflix from 'notiflix';
import { AuthService } from './services/AuthService';
import { SHARED_DATA } from './shared/sharedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isPageLoaded: Boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkAutoLogin();
  }

  checkAutoLogin = () => {
    let username = localStorage.getItem("group-properties-em");
    let password = localStorage.getItem("group-data");

    if (username && password) {
      this.isPageLoaded = true;
      const username_bytes = CryptoJS.AES.decrypt(username, SHARED_DATA.authentication.hash);
      const password_bytes = CryptoJS.AES.decrypt(password, SHARED_DATA.authentication.hash);
      const DECRYPTED_UN = username_bytes.toString(CryptoJS.enc.Utf8);
      const DECRYPTED_PW = password_bytes.toString(CryptoJS.enc.Utf8);

      const credentials = { username: DECRYPTED_UN, password: DECRYPTED_PW };
      this.autoLoginAttempt(credentials);
    }
  }

  autoLoginAttempt = (DATA: any) => {
    this.authService.authenticateUserCredentials(DATA).then(authentication => {
      SHARED_DATA.authentication.isLogin = true;
      let convertedToken = btoa(JSON.stringify(authentication));
      localStorage.setItem("angularToken", convertedToken);
      this.router.navigate(['/dashboard']);
      this.isPageLoaded = false;

    }).catch(err => {
      this.isPageLoaded = false;
      console.error(err);
    });
  }
}
