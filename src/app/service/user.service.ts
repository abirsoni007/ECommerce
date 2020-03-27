import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }


onSignUp(){
return this.http.get('localhost:3000/api/v1/users/users/notification',{
  headers: new HttpHeaders({'header': 'get()'}),
  params: new HttpParams().set('print', 'param')
})
}
}