import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  perm!: String;

  ADMIN = "ADMIN"
  
  constructor(
    public jwtHelper: JwtHelperService,
    private http:HttpClient
  ) {
    
  }

  registerUser(user:any) {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/users/register', user, {headers})
  }

  authenticateUser(user:any) {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers})
  }

  getProfile() {

    // let headers = new HttpHeaders() //? old
    this.loadToken();

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });

    //? not use
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': this.authToken
    // });

    // headers.append('Authorizaion', this.authToken);
    // headers.append('Content-Type', 'application/json')
    
    return this.http.get('http://localhost:3000/users/profile', {headers: headers});
  }

  storeUserData(token:any, user:any) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('perm', JSON.stringify(user.permission))
    this.authToken = token
    this.user = user
    this.perm = this.user.permission
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.perm = ""
    localStorage.clear();
  }
  loggedIn() {
    // this.loadToken();
    // const helper = new JwtHelperService();
    // return helper.isTokenExpired(this.authToken); //False if Token is good, True if not good
    // console.log(this.jwtHelper.isTokenExpired())
    return this.jwtHelper.isTokenExpired();
  }

  permAdmin() {
    this.perm = JSON.parse(localStorage.getItem('perm') || '{}');
    // console.log("check permAdmin", this.perm)

    if (this.perm === "ADMIN") {
      // console.log("check permAdmin2", this.perm)
      return true
    }
    return this.jwtHelper.isTokenExpired();
  }
  permUser() {
    this.perm = JSON.parse(localStorage.getItem('perm') || '{}');

    if (this.perm === "USER") {
      return true
    }
    return this.jwtHelper.isTokenExpired();
  }


  // v2
  // loggedIn(){
  //   if(this.authToken != null){return true;}
  //   else{return false;}
  // }

}
