import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick() {
    this.authService.logout();
    Swal.fire({
      icon: 'success',
      text: 'Logout Success',
      confirmButtonColor: '#249A00'

    });
    // console.log("Logout Success")
    this.router.navigate(['/login'])
    return false;
  }

}
