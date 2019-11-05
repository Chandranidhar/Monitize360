
import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NumberValueAccessor } from '@angular/forms';
import {ApiService} from '../../services/api-service';
import { CookieService } from 'ngx-cookie-service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {ActivatedRoute, Router} from '@angular/router'


export interface DialogData {
  data: any;
  msg:any;
} 

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  edituserForm:FormGroup;
  public controls:FormControl;
  public stateList:any ;
  public user_data:any=[];
  public data:any=[];
  public cityList: any;
 
  public message:any="Submitted Successfully";
  

  constructor(public formbuilder:FormBuilder, public apiservice:ApiService, public cookieservice:CookieService, public dialog: MatDialog, public router:Router, public activatedRouter:ActivatedRoute) {
    this.getStateList();
    this.getCityList();
   
    
      this.editform();
      this.message = "Updateded Successfully";
    this.edituserForm = this.formbuilder.group({
      id:this.activatedRouter.snapshot.params.id,
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      zip:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      companyname:['',Validators.required],
      designation:['',Validators.required],
      companywebsite:['',Validators.required],
      type:['user'],
      status: 1
    });
   }
  

  ngOnInit() {}
  
  openDialog(x:any): void {
    const dialogRef = this.dialog.open(EditModaleComponent, {
      panelClass:['modal-md','success-modal'],
      data:{msg:x}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
//user list add or update function
  register(){
    console.log('this.edituserForm.value')
    console.log(this.edituserForm.value)
    if(this.edituserForm.valid){
      console.log(this.edituserForm.value)
     
      let data:any={};
      // delete this.edituserForm.value.confirmpassword;
      data={
        "source": "user",
        "data": this.edituserForm.value,
        "token": this.cookieservice.get('jwttoken')
    };
    
    this.apiservice.postDatawithoutToken('addorupdatedata',data).subscribe(res=>{
      let result:any = {};
      result = res;
      
      if(result.status=='success'){
        this.openDialog(this.message);
        // setTimeout(()=>{
        //   this.dialog.closeAll();
        // },2000);
        // setTimeout(() => {
        //   this.router.navigateByUrl('/userlist');

        // }, 2100);
      }
      
    })      
    }
    else{
      console.log(this.edituserForm.value)
    }
    // if(this.edituserForm.value.status){
    //   this.edituserForm.value.status=parseInt('1');
    // }
    // else{
    //   this.edituserForm.value.status=parseInt('2');
  
    // }
    
  }
// user list edit
  editform(){
    let data:any={};
    data={
      source: "user",
      
      condition: {
        _id: this.activatedRouter.snapshot.params.id,
      
      },
      "token": this.cookieservice.get('jwttoken')
  };
  
  
  this.apiservice.postDatawithoutToken('datalist',data).subscribe(res=>{
    let result:any = {};
    result = res;
    // console.log(result.res)

    this.edituserForm.patchValue({
      firstname:result.res[0].firstname,
      lastname:result.res[0].lastname,
      email:result.res[0].email,
      phone:result.res[0].phone,
      zip:result.res[0].zip,
      city:result.res[0].city,
      state:result.res[0].state,
      companyname:result.res[0].companyname,
      designation:result.res[0].designation,
      companywebsite:result.res[0].companywebsite,
      status:result.res[0].status,

    })

  }); 
}

  getStateList (){
    this.apiservice.getJsonObject('assets/json/usa-states.json').subscribe(response=>{
      let result:any = {};
      result = response;
      this.stateList = result;
      
    })
  }
  getCityList() {
    this.apiservice.getJsonObject('assets/json/usa-cities.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.cityList = result;
    })
  }
  inputBlur(val:any){
    
    this.edituserForm.controls[val].markAsUntouched();
}

}

@Component({
  selector:'app-modale',
  templateUrl:'./modale.html'
})

export class EditModaleComponent {
  constructor( public dialogRef: MatDialogRef<EditModaleComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}
