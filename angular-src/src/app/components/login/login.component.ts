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
  
  username!: String;
  password!: String;
  
  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    // console.log(this.username) // test onSubmit
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data) // check auth of user
      if ((data as any).success) {
        this.authService.storeUserData((data as any).token, (data as any).user)
        const mydata = data
        Swal.fire({
          icon: 'success',
          text: 'Login Success'
          // text: Object.values(data)[0] // select value from object 
        });
        this.router.navigate(['/dashboard'])
      } else {
        const mydata = data
        Swal.fire({
          icon: 'error',
          text: Object.values(data)[1] // select value from object 
        });
        this.router.navigate(['/login'])
      }
    })
  }

}
