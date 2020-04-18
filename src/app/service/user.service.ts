
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





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

  onList() {
    return this.http.get<any[]>('http://139.59.55.24/api/v1/divisions', {
    })
  }


  onUpdateDivision(user) {

    let Auth = localStorage.getItem('token');
    console.log(Auth)
    var header_obj = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + Auth
    });


    const httpOption = {
      headers: header_obj
    };
    return this.http.patch('http://139.59.55.24/api/v1/users/update_profile', { division: user }, httpOption)

  }

  onCategoryList() {
    let Auth = localStorage.getItem('token');
    var header_catlist = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + Auth
    });

    const httpCatList = {
      headers: header_catlist
    };
    return this.http.get('http://139.59.55.24/api/v1/categories',
      httpCatList
    )
  }

  getProgfile() {
    let Auth = localStorage.getItem('token');
    var header_profile = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + Auth
    });
    const httpProfile = {
      headers: header_profile

    };
    return this.http.get('http://139.59.55.24/api/v1/users/account_profile',
      httpProfile)
  }
updateProfile(user){
  let Auth = localStorage.getItem('token');
  var header_update = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + Auth
  });
  const httpupdate = {
    headers: header_update

  };
  return this.http.patch('http://139.59.55.24/api/v1/users/update_profile', user , httpupdate)

}
}
