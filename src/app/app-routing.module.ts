import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import{ ForgetComponent } from './components/forget/forget/forget.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component'; 
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { SupportComponent } from './components/support/support.component';
import { UserDashboardComponent } from '../app/components/user-dashboard/user-dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { Resolveservice } from './services/resolve-service';
import { AddadminComponent } from './components/addadmin/addadmin.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'forget', component:ForgetComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'resetpassword', component:ResetpasswordComponent},

  {path:'admindashboard', component:AdmindashboardComponent, resolve:{results:Resolveservice}, data:{source:'user',"condition":{"type":"admin"}}, canActivate:[AuthGuard]},

  {path:'editprofile',component:EditprofileComponent},
  {path:'support', component:SupportComponent},
  // {path:'user-dashboard', component:UserDashboardComponent},
  { path: "user-dashboard", component: UserDashboardComponent, resolve: {results: Resolveservice}, data: {source: 'user',"condition":{"type":"user"}}, canActivate:[AuthGuard]},
  {path:'addadmin',component:AddadminComponent},
  {path:'editadmin/:id',component:AddadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

