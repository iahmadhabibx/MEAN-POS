import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthGuard } from './security/auth.guard';
import { AuthWrapperComponent } from './components/authentication/auth-wrapper/auth-wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticatedGuard } from './security/authenticated.guard';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: "", component: AuthWrapperComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: AuthWrapperComponent, canActivate: [AuthenticatedGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthWrapperComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
