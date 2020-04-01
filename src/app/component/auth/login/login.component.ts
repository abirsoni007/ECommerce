import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first, concatAll } from 'rxjs/operators';

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
        private userService: UserService
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
        debugger
        // stop here if form is invalid
        if (this.login.invalid) {
            return;
        }

        debugger
        this.userService.onLogin()
        
            .pipe(first())
            .subscribe(
                data => {
                  this.file= data
                  console.log(this.file)
                  this.file.email.value== this.login.value;
                    this.file.password.value== this.login.value;
                },
                error => {
                    this.error = error;
                   
                });
    }
}