import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidation } from './passwordValidator';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  error: string;
  loading = false;
  constructor(private userSer: UserService, private router: Router,
    private toaster: ToastrService) { }

  ngOnInit() {

    this.signup = new FormGroup({

      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      document: new FormControl(null),
      ern_number: new FormControl(null),
      password: new FormControl(null),
      password_confirmation: new FormControl(null, passwordValidation)
    })

  }


  onSubmit() {
console.log(this.signup)
    this.userSer.onSignUp(this.signup.value).pipe(first()).subscribe(data => {
      this.toaster.success('sigup', 'success')
      this.router.navigate(['login'], { queryParams: { registered: true } });
    },
      error => {
        this.toaster.error(error)
        this.error = error;

      });
  }
}