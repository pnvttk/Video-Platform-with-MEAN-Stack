import { Component, NgZone, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { VideoRequestGetComponent } from 'src/app/video-request-get/video-request-get/video-request-get.component';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Video } from '../video-request-get';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SafePipe } from '../safe.pipe';
import { VideoRequestModule } from '../../video-request-get.module';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  videoList: Video[] = [];
  
  MONGO_API = 'http://localhost:9000'

  // http header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  data: any
  getId: any
  // updateForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private videoRequest: VideoRequestGetComponent,
    private sanitizer: DomSanitizer,

  ) {
    //? match id from video request
    this.getId = this.activatedRoute.snapshot.paramMap.get('id')

    /* //? update form is not used
    // this.videoRequest.GetVideo(this.getId).subscribe(res => {
    //   this.updateForm.setValue({
    //     title: res['title'],
    //     description: res['description'],
    //     url: res['url'],
    //     img_url: res['img_url'],
    //   })
    // })

    // this.updateForm = this.formBuilder.group({
    //   title: [''],
    //   description: [''],
    //   url: [''],
    //   img_url: [''],
    // })
    */
  }
   

  ngOnInit(): void {

    console.log('video: id = ' + this.getId)
    this.getOne()
    // console.log(this.)
  }

  // ? ref :https://youtu.be/Il-o7GChUr8
  getOne() {
    this.videoRequest.GetVideo(this.getId).subscribe(data => {
      console.log(data)
      this.data = data
    })
  }

  /* //? not working
  GetVideo(id: any): Observable<any> {
    // console.log('testGetvideo') //? check function
    let API_URL = `${this.MONGO_API}/video/${id}`
    // console.log(API_URL) //? check url
    return this.http.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
      return res || {}
      }),
      catchError(this.handleError)
      )
  }
  */


  /* //? for update from but not using form
  onUpdate(): any {
    this.videoRequest.UpdateVideo(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data Updated Succesfully')
      this.ngZome.run(() => this.router.navigateByUrl('/video-detail'))
    },(err) => {
      console.log(err)
    })
  }*/

    // Error
    handleError(error: HttpErrorResponse) {
      let errorMessage = ''
      if (error.error instanceof ErrorEvent) {
        // handle client error
        errorMessage = error.error.message
      } else {
        // handle server error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
      }
      console.log(errorMessage)
      return throwError(errorMessage)
    }
  
}
