import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators, NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  submitted = false;
  error: string;

  constructor(

    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.login = new FormGroup({
      user: new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      ern_number: new FormControl(''),
      password: new FormControl(null),
      remember_me: new FormControl(false)
      })});

  }
  

  onSubmit(user) {
    console.log(this.login)

    if (this.login.invalid) {
      return;
    }
    this.userService.onLogin(user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['deshboard']);
        },
        error => {
          
          this.error = error;
          console.log(this.error)

        });
  }
}