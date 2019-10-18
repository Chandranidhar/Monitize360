import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NzE0NjQ4NDksImlhdCI6MTU3MTM3ODQ0OX0.hItJ7uRo5lXq6-Q3Zv-Bo9aCNTNSm-0j6bCrUhSGHG8';
  public logo: any = '';
  public fromTitle: any = "Login Form";    // This is a From Title 
   
  public endpoint: any = "login";
  public fullUrl: any = this.apiService.api_url; // server url
  public signUpRouteingUrl: any = '/sign-up';
  public forgetRouteingUrl: any = '/forget';
  public routerStatus: any;
  // public cookieSet: any = {
  //   "cookie": [
  //     {
  //       "type": "token",
  //       "name": "jwtToken"
  //     },
  //     {
  //       "type": "email",
  //       "name": "Username"
  //     },
  //     {
  //       "type": "_id",
  //       "name": "_id"
  //     }]
  // };
  constructor(public apiService: ApiService,public cook:CookieService) {
    this.routerStatus = {           // this is use for if login succcess then navigate which page 
      "data": [
        {
          "type": "admin",
          "routerNav": "forget-password"
        },
        {
          "type": "user",
          "routerNav": "userDashbord"
        },
        {
          "type": "model",
          "routerNav": "modelDashbord"
        }
      ]
    }

  }

  ngOnInit() {
    this.cook.set('jwttoken',this.token);
  }

}
