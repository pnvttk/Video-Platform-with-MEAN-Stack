import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from './video-request-get';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
// import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-video-request-get',
  templateUrl: './video-request-get.component.html',
  styleUrls: ['./video-request-get.component.css']
})
export class VideoRequestGetComponent implements OnInit {

  videoList: Video[] = [];

  mystring = 'I want this to be two lines. \\n Two lines would be great'

  testP = this.mystring.replace(/\\n/g, '\n')

  searchText: any;

  readMore = false;

  data: any
  // rpt: any

  arrOfobj: any[] = []

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
      // console.log('response from server', response) //? check res from server
      this.arrOfobj = response
      //? for loop to replace \n string to newline
      for (var i = 0; i < this.arrOfobj.length; i++){
        this.arrOfobj[i].description = this.arrOfobj[i].description.replace(/\\n/g, '<br>\n') //* work
      }
      // console.log(this.arrOfobj[8].description) //? check arr of desc
      //? put respon into property
      this.videoList = response
      this.data = response

    })
  }

  GetVideos() {
    return this.http.get(`${this.MONGO_API}`)
  }

  GetVideo(id: any): Observable<any>{
    let API_URL = `${this.MONGO_API}/video/${id}`
    // console.log("this is GetVideo(id) " + API_URL)
    return this.http.get(API_URL, { headers: this.httpHeaders})
  }

  AddVideo(data: Video): Observable<any>{
    let API_URL = `${this.MONGO_API}/add-video`
    return this.http.post(API_URL, data)
  }

  UpdateVideo(id: any, data: any): Observable<any>{
    let API_URL = `${this.MONGO_API}/update-video/${id}`
    return this.http.put(API_URL, data, {headers: this.httpHeaders})
  }

  DeleteVideo(id: any): Observable<any> {
    let API_URL = `${this.MONGO_API}/delete-video/${id}`
    return this.http.delete(API_URL, {headers: this.httpHeaders})
  }

  delete(id: any, i: any) {
    // console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.DeleteVideo(id).subscribe((res) => {
          this.videoList.splice(i, 1)
        })
        Swal.fire(
          'Deleted!',
          'Video has been deleted.',
          'success',
        )
      }
    })
}

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

}


