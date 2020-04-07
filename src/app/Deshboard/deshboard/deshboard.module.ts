import { NgModule } from "@angular/core";
import { DeshboardComponent } from './deshboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
      declarations: [
            DeshboardComponent,
      ],
      imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule],
      providers: [

      ]
})
export class DeshboardModule {

}