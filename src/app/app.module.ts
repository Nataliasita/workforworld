import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateApplicantComponent } from './components/create-applicant/create-applicant.component';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HeaderComponent } from './components/header/header.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateApplicantComponent,
    ApplicantProfileComponent,
    AvatarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
