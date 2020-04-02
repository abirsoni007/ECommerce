import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }



  onSignUp(user) {
    return this.http.post('http://139.59.55.24/api/v1/users/sign_up', user)


  }


  onLogin(user) {
    return this.http.post(`http://139.59.55.24/api/v1/users/authenticate`, user)
  }
}