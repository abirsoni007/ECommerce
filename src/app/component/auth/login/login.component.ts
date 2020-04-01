import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first, concatAll } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember_me: [false],
      ern_number: ('')

    });
  }

  onSubmit(user: { email: any, password: any, remember_me: boolean, ern_number: any }) {

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
          debugger
          this.error = error;
          console.log(this.error)

        });
  }
}