import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';



@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent
  ],
  exports: [
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
