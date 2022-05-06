import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticatedGuard } from 'src/app/security/authenticated.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:     '',
    canActivateChild:[AuthenticatedGuard],
    children: [
      {
        path:      '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
    declarations: [
        DashboardComponent
      ],
      imports: [
        RouterModule.forChild(routes),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [AuthenticatedGuard],
      bootstrap: []
})
export class DashboardModule {}
