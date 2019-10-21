import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
  public userdetails:any;public username:any;

  constructor(public cookieService: CookieService,public router: Router) {
  
    //console.log(this.cookieService.getAll());
    this.userdetails = JSON.parse(this.cookieService.get('user_details'));
    this.username=this.userdetails.firstname+' '+this.userdetails.lastname;
   }

  ngOnInit() {
  }
  logout(){
    
    this.cookieService.deleteAll();
    setTimeout(() => {
      this.router.navigateByUrl('/login');  
    }, 500);
    
  }
}
