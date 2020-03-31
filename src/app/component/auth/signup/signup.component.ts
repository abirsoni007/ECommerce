import { Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { passwordValidation } from './passwordValidator';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:FormGroup;
error: string;
loading=false;
  constructor(private userSer: UserService, private router: Router) { }

  ngOnInit(){
  
    this.signup = new FormGroup({
      
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      file: new FormControl(null),
      enum: new FormControl(null),
      password: new FormControl(null),
      confirmedPassword: new FormControl(null, passwordValidation)
    })
    console.log(this.signup)
  }
  

  onSubmit(){
    
   
      this.userSer.onSignUp(this.signup.value).pipe(first()).subscribe(data=>{console.log(data)
        this.router.navigate(['login'], { queryParams: { registered: true }});
      },
      error => {
          this.error = error;
     
      });

  }
}
