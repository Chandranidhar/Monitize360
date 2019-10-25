import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {
  public UserAllData: any;
  UserAllDataHeaderSkipValue: any = [];
    UserAllDataModifyHeaderValue: any = {};
    statusarray: any = [{val: 1, name: 'Approve'}, {val: 4, name: 'Decline'}, {val: 3, name: 'Lock'}]; 

    pendingmodelapplicationarray: any = [];
  pendingmodelapplicationarray_skip: any = ['_id', 'type', 'password', 'id', 'created_at', 'accesscode'];
  pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name'];

    updateendpoint = 'addorupdatedata';
    deleteendpoint = 'deletesingledata';
    tablename = 'user';
    searchendpoint = 'datalist';
    editroute: any = 'editroute';
    modify_header_array: any = {
        'firstname': "First Name",
        'email': 'Email Id',
        'lastname': 'Last Name',
        'name': "Full Name"
    };

     // this is use for  All type of search 
     search_settings:any={

      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

      textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

      search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
  }
  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data;
      //console.log(result.results.res);
      this.pendingmodelapplicationarray = result.results.res;
    
    })
  }

 

}
