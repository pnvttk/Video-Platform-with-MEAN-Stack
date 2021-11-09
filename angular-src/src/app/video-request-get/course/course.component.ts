import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from '../video-request-get/video-request-get';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  //empty property to store class
  videoList: Video[] = [];

  // filter searh
  searchText: any;

  // temp data
  data: any

  // for replace text
  // rpt: any // not used anymore

  // use this instead of rpt
  arrOfobj: any[] = []

  // REST API
  // PHP_API = 'http://localhost/wpj/php_rest_vdo/api/' // not use anymore
  MONGO_API = 'http://localhost:9000'

  // Http header
  httpHeaders = new HttpHeaders().set('Conten-Type', 'application/json')
  
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    // private httpHeaders : HttpHeaders
  ) { }

  ngOnInit(): void {
    
    this.http.get<Video[]>(this.MONGO_API + '/videos').subscribe(response => {
      // console.log('response from server', response) //? check res from server
      this.arrOfobj = response //? put response data in to arrOfobj

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

  //? read more/less button // not use anymore
  // // read more ft
  // // readMore = false; // not used anymore
  // // isReadMore = true

  // showText() {
  //    this.isReadMore = !this.isReadMore
  // }

}
