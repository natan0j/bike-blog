import { AppComponent } from './app.component';
import { LoginGuardService } from './login-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthGuard, canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { LoginMainComponent } from './login-main/login-main.component';
import { UserpanelComponent } from './userpanel/userpanel.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);;
const routes: Routes = [
  {path: '', component: UserpanelComponent},
  {path: 'login', component: LoginMainComponent},
  {path: 'adminpanel', component: AdminpanelComponent, canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
