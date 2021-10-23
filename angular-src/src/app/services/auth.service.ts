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
  
  constructor(
    public jwtHelper: JwtHelperService,
    private http:HttpClient
  ) { }

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
    // let headers = new HttpHeaders() // old
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
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
    this.authToken = token
    this.user = user
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  loggedIn() {
    // this.loadToken();
    // const helper = new JwtHelperService();
    // return helper.isTokenExpired(this.authToken); //False if Token is good, True if not good
    // console.log(this.jwtHelper.isTokenExpired())
    return this.jwtHelper.isTokenExpired();
  }

  // v2
  // loggedIn(){
  //   if(this.authToken != null){return true;}
  //   else{return false;}
  // }

}
