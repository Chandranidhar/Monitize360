import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ForgetComponent } from './components/forget/forget/forget.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { SupportComponent } from './components/support/support.component';
import { UserDashboardComponent } from '../app/components/user-dashboard/user-dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { Resolveservice } from './services/resolve-service';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { AdminlistComponent } from './components/adminlist/adminlist.component'
import { UserlistComponent } from './components/userlist/userlist.component'
import { PurchasedataComponent } from './components/purchasedata/purchasedata.component';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  // {path:'admin-dashboard', component:AdmindashboardComponent,canActivate:[AuthGuard]},
  { path: 'admin-dashboard', component: UserDashboardComponent,resolve: { results: Resolveservice }, data: { source: 'billing_details_view'}, canActivate: [AuthGuard] },
  { path: 'editprofile', component: EditprofileComponent ,canActivate: [AuthGuard] },
  { path: 'support', component: SupportComponent, canActivate: [AuthGuard]},
  // {path:'user-dashboard', component:UserDashboardComponent},
  { path: "user-dashboard", component: UserDashboardComponent, resolve: { results: Resolveservice },data: { source: 'billing_details_view',condition:{'user_id_object':'user_id_object'}}, canActivate: [AuthGuard] },
  { path: 'addadmin', component: AddadminComponent ,canActivate: [AuthGuard] },
  { path: 'editadmin/:id', component: AddadminComponent ,canActivate: [AuthGuard] },
  { path: 'adminlist', component: AdminlistComponent, resolve: { results: Resolveservice }, data: { source: 'user', "condition": { "type": "admin" } }, canActivate: [AuthGuard] },
  { path: 'userlist', component: UserlistComponent, resolve: { results: Resolveservice }, data: { source: 'user', "condition": { "type": "user" } }, canActivate: [AuthGuard] },
  { path: 'purchasedata', component: PurchasedataComponent,canActivate: [AuthGuard]  },
  { path: 'billing', component: BillingDetailsComponent,canActivate: [AuthGuard]  },
  { path: 'myorders', component: OrdersComponent, resolve: { results: Resolveservice }, data: { source: 'billing_details_view',condition:{'user_id_object':'user_id_object'}}, canActivate: [AuthGuard] },
  { path: 'orderlist', component: OrdersComponent, resolve: { results: Resolveservice }, data: { source: 'billing_details_view'},canActivate: [AuthGuard] },
  {path:'edituser/:id',component:EdituserComponent ,canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }