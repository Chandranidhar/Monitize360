import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(public cookieService: CookieService,public router: Router) { }

  ngOnInit() {
  }
  logout(){
    console.log("logout");
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/login');
  }
}
