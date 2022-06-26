import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotComponent} from './forgot/forgot.component';
import {CommonModule} from "@angular/common";
import {MaterialUiModule} from "../../modules/material-ui.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuardService} from "../../services/auth-guard.service";
import {ProfileComponent} from "./profile/profile.component";
import {appRouteConst} from "../../constants/app-route-const";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: appRouteConst.login, component: LoginComponent},
      {path: appRouteConst.register, component: RegisterComponent},
      {path: appRouteConst.profile, component: ProfileComponent, canActivate: [AuthGuardService]},
      {path: appRouteConst.forgot, component: ForgotComponent},
      {path: '', redirectTo: appRouteConst.login, pathMatch: 'full'}
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotComponent
  ]
})
export class AccountModule {
}