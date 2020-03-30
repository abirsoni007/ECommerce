import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-Routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





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
      
      ],
      
})

export class AuthModule{}
