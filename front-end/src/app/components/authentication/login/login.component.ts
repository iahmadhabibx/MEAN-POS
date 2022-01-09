import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import Notiflix from 'notiflix';
import { SHARED_DATA } from 'src/app/shared/sharedData';
import { Router } from '@angular/router';
import * as CrypotJS from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(150)]],
      password: ['', [Validators.required]]
    })
  }

  get form() {
    return this.signInForm.controls;
  }

  onAuthenticateUser = () => {
    if (this.signInForm.valid) {
      const convertedPW = btoa(this.signInForm.value.password);
      this.signInForm.value.password = convertedPW;

      this.authService.authenticateUserCredentials(this.signInForm.value).then(authentication => {
        this.postAuthenticateUser(authentication);
      }).catch(err => {
        Notiflix.Notify.failure("Please enter the correct credentials")
      })
    }
  }

  postAuthenticateUser = (authentication: any) => {
    SHARED_DATA.authentication.isLogin = true;
    const { username, password } = this.signInForm.value;
    let convertedToken = btoa(JSON.stringify(authentication));
console.log(username, password);

    const ENCRYPTED_EMAIL = CrypotJS.AES.encrypt(username, SHARED_DATA.authentication.hash).toString();
    const ENCRYPTED_PW = CrypotJS.AES.encrypt(password, SHARED_DATA.authentication.hash).toString();

    localStorage.setItem("angularToken", convertedToken);
    localStorage.setItem("group-properties-em", ENCRYPTED_EMAIL);
    localStorage.setItem("group-data", ENCRYPTED_PW);
    this.router.navigate(['/dashboard']);
    Notiflix.Notify.success('Welcome back');
  }

}
