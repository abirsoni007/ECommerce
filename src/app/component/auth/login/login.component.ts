import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any=[]
  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.user.onSignUp().subscribe(post=> {this.login=post;
      console.log(post)
    })
  }
}
