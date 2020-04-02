import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-Routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent,
        
    ],
    imports: [
        RouterModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule
      ],
      providers:[
        
      ]
})

export class AuthModule{}
