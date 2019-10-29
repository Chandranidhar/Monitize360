import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public UserAllData: any;
  UserAllDataHeaderSkipValue: any = [];
    UserAllDataModifyHeaderValue: any = {};
    statusarray: any = [{val: 1, name: 'Pending'}, {val: 2, name: 'Cancelled'}, {val: 3, name: 'Delivered'}]; 

    pendingmodelapplicationarray: any = [];
  pendingmodelapplicationarray_skip: any = ['_id', 'user_email','type', 'fullname', 'phone', 'pincode', 'city','area','landmark',
                                            'housenumber','state','billing_type'];
  pendingmodelapplicationarray_detail_skip: any = ['_id', 'user_email', 'fullname','phone'];

    updateendpoint = 'addorupdatedata';
    deleteendpoint = 'deletesingledata';
    tablename = 'user';
    searchendpoint = 'datalist';
    editroute: any = 'editroute';
    modify_header_array: any = {
        'billing fullname': "Name",
        'billing phone': "Phone Number",
        'search count': "Data Number",
        'search query':"Data Criteria",
        'created at': "Created on"
    };

     // this is use for  All type of search 
     search_settings:any={

      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

      textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

      search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
  }

  
  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data;
    //console.log(data.results.res);
      this.pendingmodelapplicationarray = result.results.res;
    
    })
  }

}
