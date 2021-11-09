import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // temp input
  username!: String;
  password!: String;
  
  // store user data
  user: any;

  // store permission data
  perm!: String

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    // console.log(this.username) // check onSubmit
    const userInput = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(userInput).subscribe(data => {
      console.log("Login authenticate ",data) // check auth of user
      if ((data as any).success) {
        this.authService.storeUserData((data as any).token, (data as any).user)
        // const mydata = data // not use
        Swal.fire({
          icon: 'success',
          text: 'Login Success',
          confirmButtonColor: '#249A00',
          // text: Object.values(data)[0] // select value from object // not use anymore
        });
        this.authService.getProfile().subscribe((profile: any) => {
          this.user = profile.user;
          this.perm = this.user.permission
          
          // console.log("this permission in login page",this.perm)
          if (this.perm === "ADMIN") {
            this.router.navigate(['/video'])
          } else {
            this.router.navigate(['/course'])
          }
        })
        // this.router.navigate(['/video']) // old way without permission
      } else {
        Swal.fire({
          icon: 'error',
          confirmButtonColor: '#FF0000',
          text: Object.values(data)[1] // select value from object, in this case error log
        });
        this.router.navigate(['/login'])
      }
    })
  }

}
