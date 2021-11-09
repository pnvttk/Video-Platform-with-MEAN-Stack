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
  // get gata
  data: any
  // get id
  getId: any
  // replace text
  rpt: any

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private videoRequest: VideoRequestGetComponent,
    private sanitizer: DomSanitizer,

  ) {
    //? match id from video request
    this.getId = this.activatedRoute.snapshot.paramMap.get('id')
  }
   
  ngOnInit(): void {
    // console.log('video: id = ' + this.getId)
    this.videoRequest.GetVideo(this.getId).subscribe(data => {
      // console.log("check GetVideo by id"+data)
      this.data = data
      // this.getOne()
      // console.log(this.replace())
      //? replace \n then put in rpt
      this.rpt = this.data.description.replace(/\\n/g, '<br>\n')
    })
    // console.log(this.)
  }

  // ? ref :https://youtu.be/Il-o7GChUr8
  getOne() {
    // check how is access data.description work? 
      console.log("test getOneDes",this.data.description )
  }

  replace() {
    this.data.description.replace(/\\n/g, '\n')
  }

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
