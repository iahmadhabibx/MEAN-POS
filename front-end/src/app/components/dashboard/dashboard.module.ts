import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfirmComponent } from 'src/app/modals/confirm/confirm.component';
import { AuthenticatedGuard } from 'src/app/security/authenticated.guard';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthenticatedGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ConfirmComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthenticatedGuard],
  bootstrap: []
})
export class DashboardModule { }
