import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import{ForgetComponent} from './components/forget/forget/forget.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ClientdashboardComponent } from './components/clientdashboard/clientdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component'; 
import { EditprofileComponent } from './components/editprofile/editprofile.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'forget', component:ForgetComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'resetpassword', component:ResetpasswordComponent},
  {path:'clientdashboard', component:ClientdashboardComponent},
  {path:'admindashboard', component:AdmindashboardComponent},
  {path:'editprofile',component:EditprofileComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
