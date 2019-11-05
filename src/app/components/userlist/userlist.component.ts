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
  
  
  
  
    statusarray: any = [{val: "1", name: 'Active'}, {val: "2", name: 'Inactive'}]; 
    
    pendingmodelapplicationarray: any = [];
    pendingmodelapplicationarray_skip: any = ['_id', 'type', 'password','confirmpassword','companywebsite','designation','type','accesscode','id','companyname','updated_at'];
    // pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name'];


    detail_skip:any=['_id','password','created_at','updated_at','accesscode','id']

      // updateendpoint is use for data update endpoint
      updateendpoint = 'addorupdatedata';
  
      // deleteendpoint is use for data delete endpoint
      deleteendpoint = 'deletesingledata';
  
      
      // this is a database collection name
      tablename = 'user';
  
      // searchendpoint is use for data search endpoint
      searchendpoint = 'addorupdatedata';
    // public serverURL: any = '';
    editroute: any = 'edituser';
      // use for Table Header modification 
  
      // Like Table head name is " firstname" => "First Name"
      modify_header_array: any = {
           'firstname': "Name",
           'lastname': '',
           'email': 'Email',
            'phone':'Phone Number',
            'city':'City',
            'state':'State',
           'created at': 'Created At',

             'status':'Status',
              'zip':'Zip Code'
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
