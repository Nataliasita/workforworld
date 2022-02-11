import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {CreateApplicantComponent } from './components/create-applicant/create-applicant.component';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: CreateApplicantComponent},
  {path: 'profile', component: ApplicantProfileComponent },
  {path: '**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
