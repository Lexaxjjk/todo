import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBodyComponent } from './modules/test-body/test-body.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'test', component: TestBodyComponent},
  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
