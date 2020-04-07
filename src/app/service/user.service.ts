import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
Auth;

  onSignUp(user) {
    return this.http.post('http://139.59.55.24/api/v1/users/sign_up', user)


  }


  onLogin(user) {
    return this.http.post(`http://139.59.55.24/api/v1/users/authenticate`, user)
  
    
  }

  onList(){
    return this.http.get<any[]>('http://139.59.55.24/api/v1/divisions',{
      headers: new HttpHeaders({ 'header': 'get()' }),
      params: new HttpParams().set('print', 'param')
  })
  }
  onUpdateDivision(user){
    this.Auth=localStorage.getItem('token')
    console.log(this.Auth)
    return this.http.patch('http://139.59.55.24/api/v1/users/update_profile', user,
    {headers:{
      Auth: localStorage.getItem("token")
    }})
  }
}