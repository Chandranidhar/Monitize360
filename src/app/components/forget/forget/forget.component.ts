import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api-service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  public logo: any = '';
  public signUpRouteingUrl: any = '/sign-up';
  public loginRouteingUrl: any = '/login';
  public formTitle: any = 'Forget Password';
  public serverUrl:any = this.apiService.api_url;
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };

  public domanUrl: any = '';
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }
  

}
