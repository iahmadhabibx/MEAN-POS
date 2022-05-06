import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatInputModule, MatTabsModule]
})
export class AppRoutingModule { }
