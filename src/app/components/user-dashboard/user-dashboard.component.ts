import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  public name: any; public phone: any; public address: any; public company: any;
  public designation: any; public website: any;public email: any;

  

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute, public CookieService: CookieService) {
    // this.serverURL = apiService.api_url;
    this.userdetails();
  }

  ngOnInit() {
  }
  /**fetch userdetails form cooki */
  userdetails() {
    let userdetails = JSON.parse(this.CookieService.get('user_details'));
    this.name = userdetails.firstname + ' ' + userdetails.lastname;
    this.phone = userdetails.phone;
    this.address = userdetails.city + ' ' + userdetails.state + ' ' + userdetails.zip;
    this.company = userdetails.companyname;
    this.designation = userdetails.designation;
    this.website = userdetails.companywebsite;
    this.email=userdetails.email;
  }
}
