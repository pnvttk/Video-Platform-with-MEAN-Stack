import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRequestGetComponent } from './video-request-get/video-request-get.component';
import { SafePipe } from './video-request-get/safe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    VideoRequestGetComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [VideoRequestGetComponent]
})
export class VideoRequestModule { }
