import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './service/user.service';
import { SharedModule } from './component/shared/shared.module';
import { DeshboardModule } from './Deshboard/deshboard/deshboard.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListModule } from './component/category-list/category_list.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './component/profile/profile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubcategoryComponent } from './component/category-list/subcategory/subcategory.component';
import { ProductlistComponent } from './component/category-list/subcategory/productlist/productlist.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EdituserComponent,
    SubcategoryComponent,
    ProductlistComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    CategoryListModule,
    DeshboardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    ToastrModule.forRoot({
      timeOut: 500,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],

  providers: [UserService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
