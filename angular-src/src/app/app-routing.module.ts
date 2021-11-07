import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './video-request-get/video-request-get/update/update.component';
import { VideoDetailComponent } from './video-request-get/video-request-get/video-detail/video-detail.component';
import { VideoRequestGetComponent } from './video-request-get/video-request-get/video-request-get.component';

const routes: Routes = [
  { path: 'video-detail/:id', component: VideoDetailComponent},
  { path: 'update/:id', component: UpdateComponent },
  { path: 'video', component: VideoRequestGetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
