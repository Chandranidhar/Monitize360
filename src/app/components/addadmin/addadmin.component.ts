import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { matchingPasswords } from '../../_helpers/must-match.validator';
import {ApiService} from '../../services/api-service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  addadminform:FormGroup;
  public controls:FormControl;
  public stateList:any = [];

  constructor(public formbuilder:FormBuilder, public apiservice:ApiService,public cookieservice:CookieService) {
    console.log(this.cookieservice.get('jwttoken'));

    this.getStateList();
    this.addadminform = this.formbuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailaddress:['',Validators.required],
      phonenumber:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      zipcode:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      type:['admin'],
      status:1
    },
    {
      validators: matchingPasswords('password', 'confirmpassword')
    });
  
  }
  ngOnInit() {
  }
  getStateList (){
    this.apiservice.getJsonObject('assets/json/usa-states.json')
    .subscribe(response=>{
      let result:any = {};
      result = response;
      console.log(result);
      this.stateList = result;
    })
  }

  register(){
    if(this.addadminform.valid)
    {
      console.log(this.addadminform.value);
      let data:any={};
      data={
        "source": "usermanagement",
        "data": this.addadminform.value,
        "token": this.cookieservice.get('jwttoken')
    };
    console.log(data);
    this.apiservice.postDatawithoutToken('addorupdatedata',data).subscribe(res=>{
      let result:any = {};
      result = res;
      console.log(result);
    })

           
    }
    else{
      console.log("Error..!   ")
    }
  }
  

  
  inputBlur(val:any){
    // console.log('on blur .....');
    this.addadminform.controls[val].markAsUntouched();
}
  

}
