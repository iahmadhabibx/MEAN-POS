import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthWrapperComponent } from './components/authentication/auth-wrapper/auth-wrapper.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';
import { TopbarComponent } from './components/topbar/topbar.component';

const routes: Routes = [
  { 
    path: "", 
    children: [
      {
        path: "",
        loadChildren:() => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: "dashboard",
        loadChildren:() => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AuthWrapperComponent,
    SidebarComponent,
    ConfirmComponent,
    TopbarComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
