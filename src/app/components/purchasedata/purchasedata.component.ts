import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../services/api-service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-purchasedata',
  templateUrl: './purchasedata.component.html',
  styleUrls: ['./purchasedata.component.css']
})
export class PurchasedataComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) formDirective: FormGroupDirective;


  public dataType: any = '';
  public data: any = {}
  public dataSource: any;
  public businessForm: FormGroup;
  public apitoken: any = '';
  public consumarform: FormGroup;
  public search_count: any = '0';
  public consumerdata: any = null;
  public businessdata: any = null;
  public spinnerval: any = 0;
  public stateList: any = {};
  public cityList: any = {};
  public homeList: any = {};
  public sourcedata: any = {};
  public VehicleList: any = {};
  public ChildrenList: any = {};
  public HouseholdList: any = {};
  public BusinessownerList: any = {};
  public consumer_datalist: any = {};
  public NumberOfPcsList: any = {};
  public squareFootageList: any = {};
  public yearofbusinessList: any = {};
  public totalIncomeList:any={};
  public CreditCapacityList:any={};
  public contactUsAllData: any;
  contactUsAllDataHeaderSkipValue: any = [];
  contactUsAllDataModifyHeaderValue: any = {};

  ServiceListArray: any;
  statusarray: any = [{ val: 1, name: 'Active' }, { val: 2, name: 'Inactive' }];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['First_Name', 'Last_Name', 'Ind_Gender_Code', 'Ind_Age', 'Email', 'Phone', 'Physical_Address', 'Physical_Zip'];

  dspColumns: string[] = [];
  constructor(public apiservice: ApiService, public cookieservice: CookieService, public fb: FormBuilder, public activatedRoute: ActivatedRoute,public snackBar: MatSnackBar) {
    this.spinnerval = 0;
    this.generateapitoken();
    this.getStateList();
    this.getCityList();
    this.getHomeList();
    this.getVehicleList();
    this.getChildrenList();
    this.getHouseholdList();
    this.getBusinessownerList();
    this.getNumberOfPcsList();
    this.getSquarefootageList();
    this.getyearofbusinessList();
    this.getCreditCapacityList();
    this. getTotalIncomeList();
    //consumer form group
    this.consumarform = this.fb.group({
      First_Name: [''],
      Middle_Initial: [''],
      Last_Name: [''],
      Physical_State: [''],
      Physical_City: [''],
      Physical_Address: [''],
      Physical_Zip: [''],
      Area_Code: [''],
      Tally_County_Code: [''],
      Income_Code: [''],
      Number_Children: [''],
      DiscretionaryIncomeCode: [''],
      Median_HseHld_Income_Code: [''],
      Household_Size: [''],
      UnsecuredCreditCapacityCode: [''],
      Vehicle_Dominate: [''],
      Business_Owner: [''],
      NetWorth_Code: [''],
      Donor_Capacity_Code: ['']
    });

    /**Busniss form group */
    this.businessForm = this.fb.group({
      Location_Sales_Code: [''],
      Years_In_Business_Code: [''],
      Square_Footage_Code: [''],
      Number_Of_PCs_Code: ['']
    });
  }

  /**Genarate apitoken for search api */
  generateapitoken() {
    let data: any = {};
    data = {
      token: this.cookieservice.get('jwttoken')
    }
    this.apiservice.postDatawithoutToken('apitoken', data).subscribe(res => {
      let result: any = {};
      result = res;
      if (result.status == '200') {
        this.apitoken = result.apitoken;
        this.cookieservice.set('apitoken', result.apitoken);
        setTimeout(() => {
          this.apitoken = this.cookieservice.get('apitoken');
        },);

        
      }
      else {
        console.log("Null")
      }
    })
  }

  ngOnInit() {

  }

  //business panel
  openConsumerPanel() {
    this.search_count = '0';
  
  }

  
  //consumer panel
  openBusinessPanel() {
    // console.log('business')
    this.search_count = '0';
  
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  //data filter for consumer and business
  filter(Value: any) {
    console.log('this.dataSource while filtering');
    console.log(Value)
    console.log(this.dataType)

    if (this.dataType == 'consumer') {
      this.consumerdata.filter = Value.trim().toLowerCase();

    } else {
      this.businessdata.filter = Value.trim().toLowerCase();
    }

  }

  //state list Json
  getStateList() {
    this.apiservice.getJsonObject('assets/json/usa-states.json').subscribe(response => {
      let result: any = {};
      result = response;
      this.stateList = result;

    })
  }

  //city list Json
  getCityList() {
    this.apiservice.getJsonObject('assets/json/usa-cities.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.cityList = result;
    })
  }

  getHomeList() {
    this.apiservice.getJsonObject('assets/json/median-home-value.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.homeList = result;
    })

  }
  getVehicleList() {
    this.apiservice.getJsonObject('assets/json/Vehicle_Dominate.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.VehicleList = result;
    })
  }
  getChildrenList() {
    this.apiservice.getJsonObject('assets/json/number-of-children.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.ChildrenList = result;
    })
  }
  getHouseholdList() {
    this.apiservice.getJsonObject('assets/json/household-size.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.HouseholdList = result;
    })
  }
  getBusinessownerList() {
    this.apiservice.getJsonObject('assets/json/business-owner.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.BusinessownerList = result;
    })
  }
  getNumberOfPcsList() {
    this.apiservice.getJsonObject('assets/json/number-of-pcs.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.NumberOfPcsList = result;
    })
  }
  getSquarefootageList() {
    this.apiservice.getJsonObject('assets/json/square-footage.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.squareFootageList = result;
    })
  }
  getyearofbusinessList() {
    this.apiservice.getJsonObject('assets/json/year-of-business.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.yearofbusinessList = result;
    })
  }
  getCreditCapacityList() {
    this.apiservice.getJsonObject('assets/json/credit-capacity.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.CreditCapacityList = result;
    })
  }
  getTotalIncomeList() {
    this.apiservice.getJsonObject('assets/json/total-income.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.totalIncomeList = result;
    })
  }

  /**For business Form Submit */
  businessFormSubmit() {
    this.spinnerval = 1;
    this.search_count = '0';
    let conditiondata: any = [];
    if(this.businessForm.valid){
      // console.log( this.businessForm.value)
    for (let cv in this.businessForm.value) {
      // console.log(this.businessForm, cv, this.businessForm.value[cv]);
    //   // console.log(this.businessForm.value[cv])

    console.log(this.businessForm, cv, this.businessForm.value[cv]);
      if (this.businessForm.value[cv].length >= 1) {

        conditiondata[cv] = this.businessForm.value[cv];
      }
    }
    console.log(conditiondata, 'cdata');

    conditiondata = Object.assign({}, conditiondata);
    console.log(conditiondata, 'cdata obj');
    
    let data: any = {};
    data = {
      "apitoken": this.apitoken,
      "token": this.cookieservice.get('jwttoken'),
      "condition": conditiondata
    };
    this.apiservice.postDatawithoutToken('searchwithcountforbusiness', data).subscribe((res) => {
      let result: any = {};
      result = res;
      console.log(result.data.Response.responseDetails.SearchCount);

      this.search_count = result.data.Response.responseDetails.SearchCount;
    
      this.spinnerval = 0;
      if(this.search_count=='0'){
        this.snackBar.open('No Data Found..!', 'Ok', {
           duration: 4000
         });
        //  this.businessForm.reset()
       }

    })
  }
  console.log(this.businessForm.value);
}

  toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }

  /**For consumer  Form Submit */
  purchaseDataForConsumar() {
    this.spinnerval = 1;
    this.search_count = '0';

    let conditiondata: any = [];

    if (this.consumarform.valid) {

      for (let cv in this.consumarform.value) {
        console.log(this.consumarform, cv, this.consumarform.value[cv]);

        if (this.consumarform.value[cv].length >= 2) {
          //let cval:any=[];
          conditiondata[cv] = this.consumarform.value[cv];
          //cval=Object.assign({}, cval);
          //conditiondata.push(cval);
        }
      }
      console.log(conditiondata, 'cdata');

      conditiondata = Object.assign({}, conditiondata);
      console.log(conditiondata, 'cdata obj');
      let data: any = {};
      data = {
        "apitoken": this.apitoken,
        "token": this.cookieservice.get('jwttoken'),
        "condition": conditiondata
      };
      this.apiservice.postDatawithoutToken('searchwithcount', data).subscribe((res) => {
        let result: any = {};
        result = res;

        console.log(result.data.Response.responseDetails.SearchCount);
        console.log(typeof (result.data.Response.responseDetails.SearchCount));
        this.search_count = result.data.Response.responseDetails.SearchCount;
        this.spinnerval = 0;
        let s_query = JSON.stringify(conditiondata)
        this.cookieservice.set('search_query', s_query);
        this.cookieservice.set('search_count', this.search_count);
        if(this.search_count=='0'){
         this.snackBar.open('No Data Found..!', 'Ok', {
            duration: 4000
          });
          // this.consumarform.reset()
        }
      })
    }
    console.log(this.consumarform.value);
  }

  // show sample data for consumer 
  showconsumerdata() {
    this.spinnerval = 1;
    let data: any = {};
    data = {
      apitoken: this.apitoken,
      token: this.cookieservice.get('jwttoken')
    }
    this.apiservice.postDatawithoutToken('data', data).subscribe((res) => {
      console.log('dta endpoint hit');
      let result: any;
      result = res;
      if (result.status == '200') {
        console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord);
        let cdata: any = result.data.Response.responseDetails.SearchResult.searchResultRecord;
        let sourcedata: any = [];
        for (let b in cdata) {
          let tempdata: any = [];
          console.log(cdata[b], b, 'b');
          for (let n in cdata[b].resultFields) {

            console.log(cdata[b].resultFields[n], 'ddd');
            //tempdata['First_Name']=cdata[b]['First_Name'];
            //tempdata['Last_Name']=cdata[b]['Last_Name'];

            if (cdata[b].resultFields[n].fieldID == 'First_Name') tempdata['First_Name'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Last_Name') tempdata['Last_Name'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Ind_Gender_Code') tempdata['Ind_Gender_Code'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Ind_Age') tempdata['Ind_Age'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Email') tempdata['Email'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Phone') tempdata['Phone'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Physical_Address') tempdata['Physical_Address'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Physical_Zip') tempdata['Physical_Zip'] = cdata[b].resultFields[n].fieldValue;

            tempdata = Object.assign({}, tempdata);
            //conditiondata=Object.assign({}, conditiondata);

          }
          sourcedata.push(tempdata);


        }
        // console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord.length);
        console.log('sourcedata', sourcedata);

        this.consumerdata = new MatTableDataSource(sourcedata);

        setTimeout(() => {
          this.consumerdata.paginator = this.paginator;
          this.consumerdata.sort = this.sort;
        }, 500);

        this.spinnerval = 0;


      }

    })
  }

  // show sample data for business 
  showbusinessdata() {
    this.spinnerval = 1;
    let data: any = {};
    data = {
      apitoken: this.apitoken,
      token: this.cookieservice.get('jwttoken')
    }
    this.apiservice.postDatawithoutToken('dataforbusiness', data).subscribe((res) => {
      console.log('dta endpoint hit');
      let result: any;
      result = res;
      if (result.status == '200') {
        console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord);
        let cdata: any = result.data.Response.responseDetails.SearchResult.searchResultRecord;
        let sourcedata: any = [];
        for (let b in cdata) {
          let tempdata: any = [];
          console.log(cdata[b], b, 'b');
          for (let n in cdata[b].resultFields) {

            console.log(cdata[b].resultFields[n], 'ddd');
            //tempdata['First_Name']=cdata[b]['First_Name'];
            //tempdata['Last_Name']=cdata[b]['Last_Name'];

            if (cdata[b].resultFields[n].fieldID == 'First_Name') tempdata['First_Name'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Last_Name') tempdata['Last_Name'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Ind_Gender_Code') tempdata['Ind_Gender_Code'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Ind_Age') tempdata['Ind_Age'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Email') tempdata['Email'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Phone') tempdata['Phone'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Physical_Address') tempdata['Physical_Address'] = cdata[b].resultFields[n].fieldValue;
            if (cdata[b].resultFields[n].fieldID == 'Physical_Zip') tempdata['Physical_Zip'] = cdata[b].resultFields[n].fieldValue;

            tempdata = Object.assign({}, tempdata);
            //conditiondata=Object.assign({}, conditiondata);

          }
          sourcedata.push(tempdata);


        }
        // console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord.length);
        console.log('sourcedata', sourcedata);

        this.businessdata = new MatTableDataSource(sourcedata);

        setTimeout(() => {
          this.businessdata.paginator = this.paginator;
          this.businessdata.sort = this.sort;
        }, 500);
        this.spinnerval = 0;

      }

    })

  }

}







