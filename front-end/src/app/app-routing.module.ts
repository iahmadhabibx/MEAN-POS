import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatInputModule]
})
export class AppRoutingModule { }
