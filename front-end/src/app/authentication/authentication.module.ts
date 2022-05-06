import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthGuard } from 'src/app/security/auth.guard';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';

const routes: Routes = [
  {
    path:     '',
    canActivateChild: [AuthGuard], 
    children: [
      {
        path:      '',
        component: AuthWrapperComponent
      }
    ]
  }
];

@NgModule({
    declarations: [
      ],
      imports: [
        RouterModule.forChild(routes),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [AuthGuard],
      bootstrap: []
})
export class AuthenticationModule {}
