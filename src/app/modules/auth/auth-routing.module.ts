import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SingInGuard } from './sign-in/sing-in.guard';
import { SingUpComponent } from './sign-up/sign-up.component';
import { SingUpGuard } from './sign-up/sing-up.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SingInGuard]},
  { path: 'sign-up', component: SingUpComponent, canActivate: [SingUpGuard], canDeactivate: [SingUpGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SingUpGuard, SingInGuard]
})
export class AuthRoutingModule { }
