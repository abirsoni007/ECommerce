import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeshboardComponent } from './Deshboard/deshboard/deshboard.component';



const routes: Routes = [{path: '', loadChildren: () => import('./component/auth/auth.module').then(m=>m.AuthModule)},
{path:'deshboard' , component: DeshboardComponent}]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
