import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';


@NgModule({
    declarations:[
        
        
    ],
    imports: [
        HttpClientModule
      ],
      providers:[UserService]
})

export class ServiceModule{

}