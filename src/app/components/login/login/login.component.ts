import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logo: any = '';
  public fromTitle: any = "Login";    // This is a From Title 
   public token:any;
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
          "routerNav": "admin-dashbord"
        },
        {
          "type": "user",
          "routerNav": "user-dashbord"
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
