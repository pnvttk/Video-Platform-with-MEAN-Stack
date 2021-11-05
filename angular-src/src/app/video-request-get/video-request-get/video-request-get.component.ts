import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from './video-request-get';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-request-get',
  templateUrl: './video-request-get.component.html',
  styleUrls: ['./video-request-get.component.css']
})
export class VideoRequestGetComponent implements OnInit {

  videoList: Video[] = [];

  // PHP_API = 'http://localhost/wpj/php_rest_vdo/api/'
  MONGO_API = 'http://localhost:9000'
  
  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    //? old php
    /*
    this.http.get<Video[]>(this.PHP_API + '/videos/read.php').subscribe(response => {
      console.log('response', response)
      this.videoList = response
    })
    */
    this.http.get<Video[]>(this.MONGO_API + '/videos').subscribe(response => {
      console.log('response', response)
      this.videoList = response
    })   
  }


}
