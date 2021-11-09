import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './video-request-get/course/course.component';
import { UpdateComponent } from './video-request-get/video-request-get/update/update.component';
import { VideoDetailComponent } from './video-request-get/video-request-get/video-detail/video-detail.component';
import { VideoRequestGetComponent } from './video-request-get/video-request-get/video-request-get.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'detail/:id', component: VideoDetailComponent},
  { path: 'update/:id', component: UpdateComponent },
  { path: 'video', component: VideoRequestGetComponent },
  { path: 'course', component: CourseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
