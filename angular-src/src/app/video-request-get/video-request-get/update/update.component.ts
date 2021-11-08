import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../video-request-get';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VideoRequestGetComponent } from '../video-request-get.component';
import { FormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  getId: any
  updateForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private videoRequest: VideoRequestGetComponent
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id')
    this.videoRequest.GetVideo(this.getId).subscribe(res => {
      this.updateForm.setValue({
        title: res['title'],
        url: res['url'],
        description: res['description'],
        img_url: res['img_url'],
      })
    })

    this.updateForm = formBuilder.group({
      title: [''],
      url: [''],
      description: [''],
      img_url: [''],
    })
    

}
  

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.videoRequest.UpdateVideo(this.getId, this.updateForm.value).subscribe(() => {
      // console.log('Data Updated Successfully')
      Swal.fire({
        title: 'Video updated Successfully',
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/Vho.gif")
          no-repeat
          center top
  
        `
      })
  
      this.ngZone.run(() => this.router.navigateByUrl('/video'))
    })
  }

}
