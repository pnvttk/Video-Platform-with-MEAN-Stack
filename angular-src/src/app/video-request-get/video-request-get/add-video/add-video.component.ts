import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video-request-get';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VideoRequestGetComponent } from '../video-request-get.component';
import { FormsModule } from '@angular/forms';

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
    this.videoRequest.AddVideo(this.videoForm.value).subscribe(() => {
      console.log("Data added Successfully")
      this.ngZone.run(() => this.router.navigateByUrl('/video'))
    }, (err) => {
      console.log(err)
    })
  }
  
}
