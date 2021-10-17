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

const routes: Routes = [
  { path: "", component: AuthWrapperComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: AuthWrapperComponent, canActivate: [AuthenticatedGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthWrapperComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
