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
import{AdminlistComponent} from './components/adminlist/adminlist.component'
import{UserlistComponent} from './components/userlist/userlist.component'
import { PurchasedataComponent } from './components/purchasedata/purchasedata.component';




const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'forget', component:ForgetComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'resetpassword', component:ResetpasswordComponent},

  {path:'admindashboard', component:AdmindashboardComponent,canActivate:[AuthGuard]},

  {path:'editprofile',component:EditprofileComponent},
  {path:'support', component:SupportComponent},
  // {path:'user-dashboard', component:UserDashboardComponent},
  { path: "user-dashboard", component: UserDashboardComponent, canActivate:[AuthGuard]},
  {path:'addadmin',component:AddadminComponent},
  {path:'editadmin/:id',component:AddadminComponent},
  {path:'adminlist',component:AdminlistComponent,resolve:{results:Resolveservice}, data:{source:'user',"condition":{"type":"admin"}}, canActivate:[AuthGuard]},
  {path:'userlist',component:UserlistComponent,resolve:{results:Resolveservice}, data:{source:'user',"condition":{"type":"user"}}, canActivate:[AuthGuard]},
  {path:'purchasedata',component:PurchasedataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

