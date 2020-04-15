import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
declarations: [
    HeaderComponent,
    FooterComponent
],
 exports:[HeaderComponent,
    FooterComponent],

    bootstrap: [HeaderComponent]
})
export class SharedModule{
    
}