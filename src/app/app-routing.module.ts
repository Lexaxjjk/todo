import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBodyComponent } from './modules/test-body/test-body.component';

const routes: Routes = [
  { path: '', component: TestBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
