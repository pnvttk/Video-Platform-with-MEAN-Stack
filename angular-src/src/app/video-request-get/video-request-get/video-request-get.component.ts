import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from './video-request-get';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-request-get',
  templateUrl: './video-request-get.component.html',
  styleUrls: ['./video-request-get.component.css']
})
export class VideoRequestGetComponent implements OnInit {

  videoList: Video[] = [];

  searchText: any;

  // PHP_API = 'http://localhost/wpj/php_rest_vdo/api/'
  MONGO_API = 'http://localhost:9000'

  // Http header
  httpHeaders = new HttpHeaders().set('Conten-Type', 'application/json')
  
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    // private httpHeaders : HttpHeaders
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

  GetVideos() {
    return this.http.get(`${this.MONGO_API}`)
  }

  GetVideo(id: any): Observable<any>{
    let API_URL = `${this.MONGO_API}/video/${id}`
    console.log("this is GetVideo(id) " + API_URL)
    return this.http.get(API_URL, { headers: this.httpHeaders})
  }

  AddVideo(data: Video): Observable<any>{
    let API_URL = `${this.MONGO_API}/add-video`
    return this.http.post(API_URL, data)
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}


