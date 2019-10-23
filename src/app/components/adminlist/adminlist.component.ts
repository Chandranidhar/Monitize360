import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  public contactUsAllData: any;
contactUsAllDataHeaderSkipValue: any = [];
  contactUsAllDataModifyHeaderValue: any = {};
  admin_datalist:any=[];
   ServiceListArray:any;
  statusarray: any = [{val: 1, name: 'Active'}, {val: 2, name: 'Inactive'}]; 
  
  admin_datalist_skip: any = ['_id', 'type', 'password','confirmpassword','zip','status','companywebsite','designation','type','accesscode','id','companyname'];
  
  // updateendpoint is use for data update endpoint
  updateendpoint = 'addorupdatedata';

  // deleteendpoint is use for data delete endpoint
  deleteendpoint = 'deletesingledata';

  
  // this is a database collection name
  tablename = 'user';

  // searchendpoint is use for data search endpoint
  searchendpoint = 'datalist';
// public serverURL: any = '';
editroute: any = 'editadmin';
  // use for Table Header modification 
// Like Table head name is " firstname" => "First Name"
modify_header_array: any = {
  'firstname': "First Name",
  'lastname': 'Last Name',
  'email': 'Email Id',
  'phone':'Phone Number',
  'city':'City',
  'state':'State',
  'created at': 'Created At',
  'updated at': 'Updated At',
 

};
  
// this is use for  All type of search 
search_settings:any={

  datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 


  textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

  search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
};


  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute,public router : Router) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data;
      // console.log(result.res);
      this.admin_datalist = result.results.res;
      
    })
  }

}