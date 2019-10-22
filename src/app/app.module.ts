import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './modules/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { LoginComponent } from './components/login/login/login.component';
import { ForgetComponent } from './components/forget/forget/forget.component';
import { ApiService } from './services/api-service';
import { CookieService } from 'ngx-cookie-service';
// authguard import statements here
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { LoginModule } from 'login';
import { ClientdashboardComponent } from './components/clientdashboard/clientdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component'; //login library
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { EditprofileComponent,commonModalComponent } from './components/editprofile/editprofile.component';
import { SupportComponent } from './components/support/support.component';

import { UserDashboardComponent } from '../app/components/user-dashboard/user-dashboard.component';
import { ListingModule } from 'listing-angular7';
import { NgxUploaderModule } from 'ngx-uploader';
import { Resolveservice } from './services/resolve-service';

import {AddadminComponent, ModaleComponent} from './components/addadmin/addadmin.component';
import { AdminlistComponent } from './components/adminlist/adminlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { PurchasedataComponent } from './components/purchasedata/purchasedata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    SignupComponent,
    ResetpasswordComponent,
    ClientdashboardComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    EditprofileComponent,
    commonModalComponent,
    SupportComponent,
    AddadminComponent,
    ModaleComponent,
    UserDashboardComponent,
    AdminlistComponent,
    UserlistComponent,
    PurchasedataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    ListingModule,
    NgxUploaderModule
    
    
  ],
  providers: [AuthGuard,CookieService,ApiService, Resolveservice],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [commonModalComponent,ModaleComponent]
})
export class AppModule { }
