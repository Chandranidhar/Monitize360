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
 public purchaseform:FormGroup;
 public businessForm:FormGroup;
 public apitoken:any='';
 public businesssearchCount:any='';

 displayedColumns:string[]=['firstname','lastname','email','phone'];
  constructor(public apiservice:ApiService, public cookieservice:CookieService,public fb:FormBuilder) {

  
  this.generateapitoken();

  this.purchaseform=this.fb.group({
    First_Name:[''],
    Middle_Initial:[''],
    Last_Name:[''],
    Physical_State:[''],
    Physical_City:[''],
    Physical_Address:[''],
    Physical_Zip:[''],
    Area_Code:[''],
    Tally_County_Code:['']


  });

  /**Business form genarate */
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
  // console.log(res);
  if(result.status=='200'){
    this.apitoken=result.apitoken;
    this.cookieservice.set('apitoken',result.apitoken);
    // console.log(result.apitoken)
  }
  else{
    // console.log("Null")
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
  
  showdata(){

let data:any={};
data={
  source:"user",
  condition:{
    type:"admin"
  },
  token:this.cookieservice.get('jwttoken')

}
this.apiservice.postDatawithoutToken('datalist',data).subscribe(res=>{
  let result:any = {};
  result = res;
// console.log(result.res)
this.dataSource=new MatTableDataSource(result.res);

  })

}
filter(Value:any){
  // console.log('this.dataSource while filtering');
  // console.log(this.dataSource);
  // console.log(this.dataSource.filter);
  // console.log(Value);
  this.dataSource.filter=Value.trim().toLowerCase();
    }

    purchasedata(){
      if(this.purchaseform.valid){

        let data:any={};
        data={
          "apitoken":this.apitoken,
          "token":this.cookieservice.get('jwttoken'),
          "condition":this.purchaseform.value
        };
        this.apiservice.postDatawithoutToken('searchwithcount',data).subscribe((res)=>
        {
          let result:any={};
          result=res;
        })
    //  console.log(this.purchaseform.value)
    } 
  }

  /**Business form submit */
  businessFormSubmit(){
    
    let data:any={};
        data={
          "apitoken":this.apitoken,
          "token":this.cookieservice.get('jwttoken'),
          "condition":this.businessForm.value
        };
        this.apiservice.postDatawithoutToken('searchwithcountforbusiness',data).subscribe((res)=>
        {
          let result:any={};
          result=res;
          if(result.status=='200'){
            // console.log(result);
            // console.log(result.data.Response.responseDetails.SearchCount);
            this.businesssearchCount=result.data.Response.responseDetails.SearchCount;
          }
        })
  }
  /**Show Business All Data */
  businessShowAllData(){
  let  data={
      apitoken:this.apitoken,
      token:this.cookieservice.get('jwttoken')
    }
    this.apiservice.postDatawithoutToken('data',data).subscribe((res)=>{
      console.log('dta endpoint hit');
      let result:any;
      result=res;
      console.log(result);
      // if(result.status=='200'){
      //   let consumerdatalistraw:any[] = result.data.Response.responseDetails.SearchResult.searchResultRecord;
      //   this.consumerdata=new MatTableDataSource(result.data.Response.responseDetails.SearchResult.searchResultRecord);
      //   console.log(this.consumerdata);
      //   for(let i in consumerdatalistraw){
      //     for (let j in consumerdatalistraw[i].resultFields){
      //       console.log(consumerdatalistraw[i].resultFields[j].fieldID);
      //       this.displayedColumns.push(consumerdatalistraw[i].resultFields[j].fieldID);
      //       console.log('this.displayedColumns');
      //       console.log(this.displayedColumns);
      //     }
          
        });
        
  }
}
