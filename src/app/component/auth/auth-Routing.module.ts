import { NgModule } from "@angular/core";import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';

const routes: Routes =  [
    {path: 'auth',component: AuthComponent,
    canActivate:[LoginComponent],
children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
]}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class  AuthRoutingMo{

}