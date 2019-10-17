import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // public token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NzEyOTk5NTYsImlhdCI6MTU3MTIxMzU1Nn0.UI--pRZ8CmRRtYZCfhOehtnca3g8jN9xcNy2P17lhxI';

  public forgetRouteingUrl: any = '/forget';
  public loginRouteingUrl: any = '/login';
  public logo: any = '../../assets/favicon.ico';
  public modaleLogo: any = '../../assets/favicon.ico';
  public formTitle: any = 'Sign Up';
  // public serverUrl: any = 'https://y1qujk78ic.execute-api.us-east-1.amazonaws.com/dev/api/';
  public serverUrl: any = this.apiService.api_url;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    // source:'usermanagement'
    source:'user'
  };
 
  constructor(public cook:CookieService, public apiService: ApiService) { }

  ngOnInit() {
    // this.cook.set('jwttoken',this.token);
  }

}
