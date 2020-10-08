import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './home/pages/tasklist/tasklist.component';
import { NewtaskComponent } from './home/pages/newtask/newtask.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { CannotopenloginService } from './core/services/cannotopenlogin.service';


const routes: Routes = [
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: 'tasklist', component: TasklistComponent, canActivate:[ AuthGuardService ] },
  { path: 'newtask', component: NewtaskComponent, canActivate:[ AuthGuardService ] },
  { path: 'signup', component: SignupComponent, canActivate:[ CannotopenloginService ] },
  { path: 'login', component: LoginComponent, canActivate:[ CannotopenloginService ] },
  { path: '**', component: TasklistComponent, canActivate:[ AuthGuardService ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
