import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './video-request-get/video-request-get/video-detail/video-detail.component';

const routes: Routes = [
  { path: 'video-detail/:id', component: VideoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
