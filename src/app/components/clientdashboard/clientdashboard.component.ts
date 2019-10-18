import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {

  constructor(public cook:CookieService) { this.userdetails();}

  ngOnInit() {
  }
  userdetails(){
    
    let userdetails=this.cook.get('user_details');
    console.log(userdetails);
    let cookie:any;
    cookie = JSON.parse(userdetails);
    console.log(cookie);
  }

}
