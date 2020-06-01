import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {DosageComponent} from './components/dosage/dosage.component';
import {ChartComponent} from './components/chart/chart.component';
import {AuthGuard} from './services/auth/auth.guard';
import {MedicinesComponent} from './components/medicines/medicines.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'dose',
  component: DosageComponent,
  canActivate: [AuthGuard]
}, {
  path: 'chart',
  component: ChartComponent,
  canActivate: [AuthGuard]
}, {
  path: 'medicines',
  component: MedicinesComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
