import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public name: any;public phone: any;public address: any;public company: any;

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute,public CookieService:CookieService) {
    // this.serverURL = apiService.api_url;
    this.userdetails();
   }

  ngOnInit() {
  }
  /**fetch userdetails form cooki */
  userdetails(){
    let userdetails = JSON.parse(this.CookieService.get('user_details'));
    this.name = userdetails.firstname+' '+userdetails.lastname;
    this.phone=userdetails.phone;
    this.address=userdetails.city+' '+userdetails.state+' '+userdetails.zip;
    this.company=userdetails.companyname;
  }
}
