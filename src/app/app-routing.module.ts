import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeshboardComponent } from './Deshboard/deshboard/deshboard.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SubcategoryComponent } from './component/category-list/subcategory/subcategory.component';
import { ProductlistComponent } from './component/category-list/subcategory/productlist/productlist.component';



const routes: Routes = [{path: '', loadChildren: () => import('./component/auth/auth.module').then(m=>m.AuthModule)},
{path:'deshboard' , component: DeshboardComponent},
{path: 'categorylist', component: CategoryListComponent},
{path: 'profile', component: ProfileComponent},
{path: 'edit', component: EdituserComponent},
{path: 'subcategory', component:SubcategoryComponent},
{path: 'productlist', component:ProductlistComponent}]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
