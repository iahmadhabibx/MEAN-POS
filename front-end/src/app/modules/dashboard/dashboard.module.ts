import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticatedGuard } from 'src/app/security/authenticated.guard';
import { VerticalBarChartComponent } from '../../components/charts/vertical-bar-chart/vertical-bar-chart.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthenticatedGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    VerticalBarChartComponent,
    HomeComponent
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
