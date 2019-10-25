<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {ApiService} from '../../services/api-service';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchasedata',
  templateUrl: './purchasedata.component.html',
  styleUrls: ['./purchasedata.component.css']
})
export class PurchasedataComponent implements OnInit {
public dataType:any='';
public data:any={}
 public dataSource:any;
 public businessForm:FormGroup;
 public apitoken:any='';
 public consumarform:FormGroup;
 public search_count:any;
 public consumerdata:any;
public businesssearchCount:any='';
 displayedColumns:string[] = ['First_Name','Last_Name'];
 dspColumns:string[] = [];
  constructor(public apiservice:ApiService, public cookieservice:CookieService,public fb:FormBuilder) {
  this.generateapitoken();
  this.consumarform=this.fb.group({
    First_Name:[''],
    Middle_Initial:[''],
    Last_Name:[''],
    Physical_State:[''],
    Physical_City:[''],
    Physical_Address:[''],
    Physical_Zip:[''],
    Area_Code:[''],
    Tally_County_Code:[''],
    Income_Code:[''],
    Number_Children:[''],
    DiscretionaryIncomeCode:[''],
    Median_HseHld_Income_Code:[''],
    Household_Size:[''],
    UnsecuredCreditCapacityCode:[''],
    Vehicle_Dominate:[''],
    Business_Owner:[''],
    NetWorth_Code:[''],
    Donor_Capacity_Code:['']

  });
  /**Busniss form group */
  this.businessForm=this.fb.group({
    Location_Sales_Code:[null],
    Years_In_Business_Code:[null],
    Square_Footage_Code:[null],
    Number_Of_PCs_Code:[null]
  });
   }
   generateapitoken(){
    let data:any={};
    data={     
      token:this.cookieservice.get('jwttoken')
   }
   this.apiservice.postDatawithoutToken('apitoken',data).subscribe(res=>{
    let result:any = {};
    result = res;
  console.log(res);
  if(result.status=='200'){
    this.apitoken=result.apitoken;
    this.cookieservice.set('apitoken',result.apitoken);
    
    this.apitoken=this.cookieservice.get('apitoken');
    console.log(this.apitoken);
  }
  else{
    console.log("Null")
  }
    })
  }
   
  ngOnInit() {
  }
  openConsumerPanel(){
    // console.log('consumer');
  }

  openBusinessPanel(){
    // console.log('business')

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
 
filter(Value:any){
  // console.log('this.dataSource while filtering');
  // console.log(this.dataSource);
  // console.log(this.dataSource.filter);
  // console.log(Value);
  this.dataSource.filter=Value.trim().toLowerCase();
    }

 
/**For business Form Submit */
businessFormSubmit() {
  console.log(this.businessForm.value);
   let data: any = {};
  data = {
    "apitoken": this.apitoken,
    "token": this.cookieservice.get('jwttoken'),
    "condition": this.businessForm.value
  };
  this.apiservice.postDatawithoutToken('searchwithcountforbusiness', data).subscribe((res) => {
    let result: any = {};
    result = res;
    console.log(result.data.Response.responseDetails.SearchCount);

    this.businesssearchCount = result.data.Response.responseDetails.SearchCount;

  })
}

    purchaseDataForConsumar(){
      this.search_count='0';

      if(this.consumarform.valid){

        let data:any={};
        data={
          "apitoken":this.apitoken,
          "token":this.cookieservice.get('jwttoken'),
          "condition":this.consumarform.value
        };
        this.apiservice.postDatawithoutToken('searchwithcount',data).subscribe((res)=>
        {
          let result:any={};
          result=res;
      
            console.log(result.data.Response.responseDetails.SearchCount);
            console.log(typeof(result.data.Response.responseDetails.SearchCount));
            this.search_count=result.data.Response.responseDetails.SearchCount;
          })
        }
      console.log(this.consumarform.value)
    } 
    showconsumerdata(){
    let data:any={};
    data={
      apitoken:this.apitoken,
      token:this.cookieservice.get('jwttoken')
    }
    this.apiservice.postDatawithoutToken('data',data).subscribe((res)=>{
      console.log('dta endpoint hit');
      let result:any;
      result=res;
      if(result.status=='200'){
        console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord);
        let datavalue:any = [];
        let consumerdatalistraw:any[] = result.data.Response.responseDetails.SearchResult.searchResultRecord;
        this.consumerdata=new MatTableDataSource(result.data.Response.responseDetails.SearchResult.searchResultRecord);
       
        for(let i in consumerdatalistraw){
          for (let j in consumerdatalistraw[i].resultFields){
            console.log(consumerdatalistraw[i].resultFields[j].fieldID);
            this.displayedColumns.push(consumerdatalistraw[i].resultFields[j].fieldID);
            console.log('this.displayedColumns');
            console.log(this.displayedColumns);
            this.dataSource = new MatTableDataSource(this.displayedColumns);
            for(let k in this.displayedColumns){
              if(consumerdatalistraw[i].resultFields[j].fieldID == this.displayedColumns[k]){
                datavalue.push(consumerdatalistraw[i].resultFields[j].fieldValue);
                console.log('datavalue');
                console.log(datavalue);
                console.log(this.displayedColumns); 
                this.dataSource=datavalue;

              }
            }
          }
        }
      }
      
    })
  }
}



=======
import { Component, OnInit,ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {ApiService} from '../../services/api-service';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-purchasedata',
  templateUrl: './purchasedata.component.html',
  styleUrls: ['./purchasedata.component.css']
})
export class PurchasedataComponent implements OnInit {
public dataType:any='';
public data:any={}
 public dataSource:any;
 public businessForm:FormGroup;
 public apitoken:any='';
 public consumarform:FormGroup;
 public search_count:any='0';
 public consumerdata:any=null;
public businesssearchCount:any='';
public spinnerval:any = 0;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 displayedColumns:string[] = ['First_Name','Last_Name','Ind_Gender_Code','Ind_Age','Email','Phone','Physical_Address','Physical_Zip'];
 dspColumns:string[] = [];
  constructor(public apiservice:ApiService, public cookieservice:CookieService,public fb:FormBuilder) {
  this.generateapitoken();
  this.consumarform=this.fb.group({
    First_Name:[''],
    Middle_Initial:[''],
    Last_Name:[''],
    Physical_State:[''],
    Physical_City:[''],
    Physical_Address:[''],
    Physical_Zip:[''],
    Area_Code:[''],
    Tally_County_Code:[''],
    Income_Code:[''],
    Number_Children:[''],
    DiscretionaryIncomeCode:[''],
    Median_HseHld_Income_Code:[''],
    Household_Size:[''],
    UnsecuredCreditCapacityCode:[''],
    Vehicle_Dominate:[''],
    Business_Owner:[''],
    NetWorth_Code:[''],
    Donor_Capacity_Code:['']
  });
  /**Busniss form group */
  this.businessForm=this.fb.group({
    Location_Sales_Code:[null],
    Years_In_Business_Code:[null],
    Square_Footage_Code:[null],
    Number_Of_PCs_Code:[null]
  });
   }

   /**Genarate apitoken for search api */
   generateapitoken(){
    let data:any={};
    data={
      token:this.cookieservice.get('jwttoken')
   }
   this.apiservice.postDatawithoutToken('apitoken',data).subscribe(res=>{
    let result:any = {};
    result = res;
  console.log(res);
  if(result.status=='200'){
    this.apitoken=result.apitoken;
    this.cookieservice.set('apitoken',result.apitoken);

    this.apitoken=this.cookieservice.get('apitoken');
    console.log(this.apitoken);
  }
  else{
    console.log("Null")
  }
    })
  }

  ngOnInit() {

    
  }
  openConsumerPanel(){
    // console.log('consumer');
  }

  openBusinessPanel(){
    // console.log('business')

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

filter(Value:any){
  // console.log('this.dataSource while filtering');
  // console.log(this.dataSource);
  // console.log(this.dataSource.filter);
  // console.log(Value);
  this.consumerdata.filter=Value.trim().toLowerCase();

  if (this.consumerdata.paginator) {
    this.consumerdata.paginator.firstPage();
  }
    }


/**For business Form Submit */
businessFormSubmit() {
  console.log(this.businessForm.value);
   let data: any = {};
  data = {
    "apitoken": this.apitoken,
    "token": this.cookieservice.get('jwttoken'),
    "condition": this.businessForm.value
  };
  this.apiservice.postDatawithoutToken('searchwithcountforbusiness', data).subscribe((res) => {
    let result: any = {};
    result = res;
    console.log(result.data.Response.responseDetails.SearchCount);

    this.businesssearchCount = result.data.Response.responseDetails.SearchCount;

  })
}

  toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }

    purchaseDataForConsumar(){
      this.spinnerval  = 1;
      this.search_count='0';
      let conditiondata:any=[];

      if(this.consumarform.valid){

        for(let cv in this.consumarform.value){
          console.log(this.consumarform,cv,this.consumarform.value[cv]);

          if(this.consumarform.value[cv].length>=2){
            //let cval:any=[];
            conditiondata[cv]=this.consumarform.value[cv];
            //cval=Object.assign({}, cval);
            //conditiondata.push(cval);
          }
        }
        console.log(conditiondata,'cdata');

        conditiondata=Object.assign({}, conditiondata);
        console.log(conditiondata,'cdata obj');
        let data:any={};
        data={
          "apitoken":this.apitoken,
          "token":this.cookieservice.get('jwttoken'),
          "condition":conditiondata
        };
        this.apiservice.postDatawithoutToken('searchwithcount',data).subscribe((res)=>
        {
          let result:any={};
          result=res;

            console.log(result.data.Response.responseDetails.SearchCount);
            console.log(typeof(result.data.Response.responseDetails.SearchCount));
            this.search_count=result.data.Response.responseDetails.SearchCount;
            this.spinnerval  = 0;
          })
        }
      console.log(this.consumarform.value)
    }


    showconsumerdata(){
    let data:any={};
    data={
      apitoken:this.apitoken,
      token:this.cookieservice.get('jwttoken')
    }
    this.apiservice.postDatawithoutToken('data',data).subscribe((res)=>{
      console.log('dta endpoint hit');
      let result:any;
      result=res;
      if(result.status=='200'){
        console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord);
        let cdata:any=result.data.Response.responseDetails.SearchResult.searchResultRecord;
        let sourcedata:any=[];
        for(let b in cdata){
          let tempdata:any=[];
          console.log(cdata[b],b,'b');
          for(let n in cdata[b].resultFields){

            console.log(cdata[b].resultFields[n],'ddd');
            //tempdata['First_Name']=cdata[b]['First_Name'];
            //tempdata['Last_Name']=cdata[b]['Last_Name'];
            
            if(cdata[b].resultFields[n].fieldID=='First_Name')tempdata['First_Name']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Last_Name')tempdata['Last_Name']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Ind_Gender_Code')tempdata['Ind_Gender_Code']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Ind_Age')tempdata['Ind_Age']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Email')tempdata['Email']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Phone')tempdata['Phone']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Physical_Address')tempdata['Physical_Address']=cdata[b].resultFields[n].fieldValue;
            if(cdata[b].resultFields[n].fieldID=='Physical_Zip')tempdata['Physical_Zip']=cdata[b].resultFields[n].fieldValue;
            
            tempdata=Object.assign({}, tempdata);
            //conditiondata=Object.assign({}, conditiondata);

          }
          sourcedata.push(tempdata);


        }
        console.log(result.data.Response.responseDetails.SearchResult.searchResultRecord.length);
        console.log('sourcedata',sourcedata);
        
        this.consumerdata=new MatTableDataSource(sourcedata);
        this.consumerdata.paginator=this.paginator;
        this.consumerdata.sort=this.sort;



      }

    })
  }
}



>>>>>>> e0f89faf20f47493de1869c33964759464b2c1cd
