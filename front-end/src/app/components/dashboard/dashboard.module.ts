import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftSidebarComponent } from 'src/app/components/dashboard/left-sidebar/left-sidebar.component';
import { AuthGuard } from 'src/app/security/auth.guard';
import { AuthenticatedGuard } from 'src/app/security/authenticated.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: "", component: DashboardComponent, canActivate: [AuthenticatedGuard] },
]

@NgModule({
    declarations: [
        DashboardComponent,
        LeftSidebarComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [AuthGuard, AuthenticatedGuard],
    exports: [],
    bootstrap: [DashboardComponent]
})

export class DashboardModule { }