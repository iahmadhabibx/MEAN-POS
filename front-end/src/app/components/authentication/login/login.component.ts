import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import Notiflix from 'notiflix';
import { Router } from '@angular/router';
import { SHARED_DATA } from 'src/app/shared/sharedData';

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

  async onAuthenticateUser() {
    if (this.signInForm.valid) {
      const convertedPW = btoa(this.signInForm.value.password);
      this.signInForm.value.password = convertedPW;
      this.authService.authenticateUserCredentials(this.signInForm.value).then((authentication: any) => {
        console.log(authentication);
        SHARED_DATA.authentication.isLogin = true;
        SHARED_DATA.USER.connectedUser = authentication.user;
        delete authentication.user;
        let convertedToken = btoa(JSON.stringify(authentication));
        localStorage.setItem("angularToken", convertedToken);
        Notiflix.Notify.success('Welcome back');
        this.router.navigate(['dashboard']);
      }).catch(err => {
        Notiflix.Notify.failure("Please enter correct credentials")
      })
    }
  }

}
