import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoaderComponent } from './components/common/page-loader/page-loader.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './components/authentication/login/login.component';
import { AuthGuard } from './security/auth.guard';
import { AuthWrapperComponent } from './components/authentication/auth-wrapper/auth-wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticatedGuard } from './security/authenticated.guard';
import { SignupComponent } from './components/authentication/signup/signup.component';

const routes: Routes = [
  { path: "", component: AuthWrapperComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthenticatedGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthWrapperComponent,
    DashboardComponent,
    SignupComponent,
    PageLoaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
