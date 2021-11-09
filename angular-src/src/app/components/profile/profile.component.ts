import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile:any) => {
      this.user = profile.user;
      // console.log("this"+this.user)
      // console.log("profile"+profile.user)
      console.log("this permission",this.user.permission)
    });
    (err: any) => {
      console.log(err)
      return false;
    }
  }

}
