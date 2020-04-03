import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { SharedModule } from './component/shared/shared.module';
import { DeshboardModule } from './Deshboard/deshboard/deshboard.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    SharedModule,
   
    DeshboardModule,
    BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut:500,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        })
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
