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
 public apitoken:any='';

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


  })
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
    console.log(result.apitoken)
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






      console.log(this.purchaseform.value)


    } 
  }
}
