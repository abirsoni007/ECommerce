import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { SharedModule } from './component/shared/shared.module';
import { DeshboardModule } from './Deshboard/deshboard/deshboard.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    SharedModule,
    DeshboardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
