import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBodyComponent } from './test-body.component';



@NgModule({
  declarations: [
    TestBodyComponent
  ],
  exports: [
    TestBodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestBodyModule { }
