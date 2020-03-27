import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-Routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent,
        
    ],
    imports: [
        RouterModule,
        AuthRoutingModule        
        
      ],
      
})

export class AuthModule{}
