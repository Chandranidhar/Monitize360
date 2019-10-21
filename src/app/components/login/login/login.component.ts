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
  public routerStatus: any;
  public buttonName:any= 'Login';
  public signUpRouteingUrl: any = { 
    // "path":"sign-up",
    "path":"sign-up",
    "buttonName":"sign-up",
    "customLink":"",
    "customURl":""
  };

  public forgetRouteingUrl: any = {
    // "path":"forget-password",
    "path":"forget",
    "buttonName":"forget-password",
    "customLink":"",
    "customURl":""
  };
  constructor(public apiService: ApiService,public cook:CookieService) {
    this.routerStatus = {           // this is use for if login succcess then navigate which page 
      "data": [
        {
          "type": "admin",
          "routerNav": "admin-dashboard"
        },
        {
          "type": "user",
          "routerNav": "user-dashboard"
        },
        {
          "type": "model",
          "routerNav": "modelDashbord"
        }
      ]
    }

  }

  ngOnInit() {
    
  }

}
