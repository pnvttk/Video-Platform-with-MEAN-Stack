import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter(){ 
  return localStorage.getItem("id_token");
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AlertmsgComponent } from './components/alertmsg/alertmsg.component';
import { AuthService } from './services/auth.service'; //
import { VideoRequestModule } from './video-request-get/video-request-get.module';
import { VideoRequestGetComponent } from './video-request-get/video-request-get/video-request-get.component';
// import { AuthGuard } from './guards/auth.guard';

//* ui
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import {KnobModule} from 'primeng/knob';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'video', component: VideoRequestGetComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AlertmsgComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VideoRequestModule,
    AccordionModule,
    InputTextModule,
    KnobModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
})

  ],
  providers: [ValidateService, AuthService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
