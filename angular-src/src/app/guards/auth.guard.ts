//?! not working
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { Injectable } from "@angular/core";
// import { Router, CanActivate } from "@angular/router";
// import { AuthService } from "../services/auth.service";

// @Injectable()
// export class AuthGuard implements CanActivate{
//     constructor(
//         private jwtHelper: JwtHelperService,
//         private authService: AuthService,
//         private router: Router) {
//     }

//     canActivate() {
//         if (this.authService.loggedIn()) {
//             // this.jwtHelper.isTokenExpired();
//             console.log("your loggedIn going to...")
//             return true
//             // still bug use
//         } else {
//             this.router.navigate(['/login'])
//             console.log("please login first")
//             console.log(this.authService.loggedIn())
//             return false
//         }
//     }
    
// }

