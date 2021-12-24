import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {SignInComponent} from "./containers/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./containers/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./containers/reset-password/reset-password.component";
import {SignUpComponent} from "./containers/sign-up/sign-up.component";
import { TermsComponent } from './containers/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password/:hash',
        component: ResetPasswordComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
