import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRequestGetComponent } from '../video-request-get.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './video-detail.component';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [VideoDetailComponent, SafeUrlPipe],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ]
})
export class VideoDetailModule { }





