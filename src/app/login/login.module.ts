import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ForgotPasswordFormComponent} from './components/forgot-password-form/forgot-password-form.component';
import {ResetPasswordFormComponent} from './components/reset-password-form/reset-password-form.component';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {SignInComponent} from './containers/sign-in/sign-in.component';
import {SignUpComponent} from './containers/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './containers/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './containers/reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    //COMPONENTS
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
    SignUpFormComponent,
    SignInFormComponent,
    //CONTAINERS
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule {
}
