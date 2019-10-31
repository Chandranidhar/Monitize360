import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {
  public name: any; public phone: any; public address: any; public company: any;
  public designation: any; public website: any;public email: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
/**liblisting code */
  public UserAllData: any;
  UserAllDataHeaderSkipValue: any = [];
    UserAllDataModifyHeaderValue: any = {};
    statusarray: any = [{val: 1, name: 'Pending'}, {val: 2, name: 'Cancelled'}, {val: 3, name: 'Delivered'}]; 

    pendingmodelapplicationarray: any = [];
  pendingmodelapplicationarray_skip: any = ['_id','user_id' ,'user_type','user_phone' ,'fullname',  'pincode','area','landmark',
                                            'housenumber','billing_type'];
  pendingmodelapplicationarray_detail_skip: any = ['_id','user_id','user_fullname','user_type',];

    updateendpoint = 'addorupdatedata';
    deleteendpoint = 'deletesingledata';
    tablename = 'user';
    searchendpoint = 'datalist';
    editroute: any = 'editroute';
    modify_header_array: any = {
        'fullname': "Name",
        'phone': "Phone Number",
        'search count': "Data Purchase",
        'user email':"Email ID",
        'created at': "Created on",
        'state':"State",
        'city':"City"
    };

     // this is use for  All type of search 
     search_settings:any={

      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

      textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

      search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
  }
  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute, public CookieService: CookieService) {
  

    // Assign the data to the data source for the table to render
    
    // this.serverURL = apiService.api_url;
    this.userdetails();
  }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data;
    // console.log(result.results.res);
      this.pendingmodelapplicationarray = result.results.res;
    
    })
  }

  /**fetch userdetails form cookie */
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

