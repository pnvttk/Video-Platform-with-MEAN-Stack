import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: String;
  username!: String;
  email!: String;
  password!: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(): false | undefined {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
     
    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      console.log('Please fill in all fields');
      Swal.fire({
        icon: 'error',
        text: 'Please fill in all fields'
      })
      return false;
    } 

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      console.log('Please use a valid email');
      Swal.fire({
        icon: 'error',
        text: 'Please use a valid email'
      });
      return false;
    } else {
      return undefined;
    }
  }
}
