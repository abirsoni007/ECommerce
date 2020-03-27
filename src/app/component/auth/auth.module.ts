import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-Routing.module';


@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent,
        AuthRoutingModule
    ]
})

export class AuthModel{}
