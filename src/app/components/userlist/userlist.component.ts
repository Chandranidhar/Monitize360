import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public contactUsAllData: any;
  contactUsAllDataHeaderSkipValue: any = [];
    contactUsAllDataModifyHeaderValue: any = {};
  
  
  
  
    statusarray: any = [{val: 1, name: 'Active'}, {val: 2, name: 'Inactive'}]; 
    
    pendingmodelapplicationarray: any = [];
    pendingmodelapplicationarray_skip: any = ['_id', 'type', 'password', 'id', 'created_at', 'accesscode'];
    pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name'];
      // updateendpoint is use for data update endpoint
      updateendpoint = 'addorupdatedata';
  
      // deleteendpoint is use for data delete endpoint
      deleteendpoint = 'deletesingledata';
  
      
      // this is a database collection name
      tablename = 'user';
  
      // searchendpoint is use for data search endpoint
      searchendpoint = 'datalist';
    // public serverURL: any = '';
    editroute: any = 'editroute';
      // use for Table Header modification 
  
      // Like Table head name is " firstname" => "First Name"
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
    };
  
  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data;
      // console.log(result.results.res);
      this.pendingmodelapplicationarray = result.results.res;
      // this.ServiceListArray=result;
      // console.log("ojjjjjjjjhgdfhgdf",result);   
    })
  }

}
