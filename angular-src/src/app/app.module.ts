import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter(){ 
  return localStorage.getItem("id_token");
}

import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './video-request-get/video-request-get/safe.pipe';
import { VideoDetailComponent } from './video-request-get/video-request-get/video-detail/video-detail.component';
import { SafeUrlPipe } from './video-request-get/video-request-get/video-detail/safe-url.pipe';
import { VideoDetailModule } from './video-request-get/video-request-get/video-detail/video-detail.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddVideoComponent } from './video-request-get/video-request-get/add-video/add-video.component';
import { UpdateComponent } from './video-request-get/video-request-get/update/update.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   // canActivate: [AuthGuard]
  // },
  {
    path: 'profile', component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  // { path: 'video', component: VideoRequestGetComponent },
  { path: 'add', component: AddVideoComponent },
  // { path: 'update', component: UpdateComponent}
  
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
    // VideoDetailComponent,
    // SafeUrlPipe
    
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
    NgbModule,
    RouterModule,
    MatFormFieldModule,
    InputTextareaModule,
    TableModule,
    
    
    // Ng2SearchPipeModule,
    // VideoDetailModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
}),
    NgbModule,
    // BrowserAnimationsModule

  ],
  providers: [ValidateService, AuthService, VideoRequestGetComponent
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
