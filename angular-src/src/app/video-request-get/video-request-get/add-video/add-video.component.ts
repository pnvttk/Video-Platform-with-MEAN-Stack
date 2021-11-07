import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video-request-get';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VideoRequestGetComponent } from '../video-request-get.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  videoForm: FormGroup
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private videoRequest: VideoRequestGetComponent
  ) {
    this.videoForm = this.formBuilder.group({
      title: [''],
      url: [''],
      description: [''],
      img_url: [''],

    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    Swal.fire({
      title: 'Video added Successfully',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.gifer.com/Vho.gif")
        no-repeat
        center top

      `
    })
    this.videoRequest.AddVideo(this.videoForm.value).subscribe(() => {
      console.log("Video added Successfully")
      this.ngZone.run(() => this.router.navigateByUrl('/video'))
    }, (err) => {
      console.log(err)
    })
  }
  
}
