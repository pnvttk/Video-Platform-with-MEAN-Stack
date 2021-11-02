import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRequestGetComponent } from './video-request-get/video-request-get.component';
import { SafePipe } from './video-request-get/safe.pipe';



@NgModule({
  declarations: [
    VideoRequestGetComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [VideoRequestGetComponent]
})
export class VideoRequestModule { }
