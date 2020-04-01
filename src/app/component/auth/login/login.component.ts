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
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;
file;
    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService, 
        private router: Router
    ) {
        
    }

    ngOnInit() {
        this.login = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.login.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.login.invalid) {
          return;
      }

      this.loading = true;
      this.userService.onLogin(this.f.email.value, this.f.password.value)
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