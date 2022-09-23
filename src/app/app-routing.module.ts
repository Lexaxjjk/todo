import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './modules/auth/sing-in/sing-in.component';
import { SingUpComponent } from './modules/auth/sing-up/sing-up.component';
import { TestBodyComponent } from './modules/test-body/test-body.component';

const routes: Routes = [
  { path: 'sing-in', component: SingInComponent},
  { path: 'sing-up', component: SingUpComponent},
  { path: '', component: TestBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
