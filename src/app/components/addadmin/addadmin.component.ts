import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { matchingPasswords } from '../../_helpers/must-match.validator';
import {ApiService} from '../../services/api-service';
import { CookieService } from 'ngx-cookie-service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {ActivatedRoute, Router} from '@angular/router'

export interface DialogData {
  data: any;
} 

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  addadminform:FormGroup;
  public controls:FormControl;
  public stateList:any = [];
  public user_data:any=[];
  public data:any=[];

  constructor(public formbuilder:FormBuilder, public apiservice:ApiService, public cookieservice:CookieService, public dialog: MatDialog, public router:Router, public activatedRouter:ActivatedRoute) {

    this.getStateList();
    if (router.url != '/addadmin') {
      this.editform();
    }
    this.addadminform = this.formbuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      zip:['',Validators.required],
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
    this.apiservice.getJsonObject('assets/json/usa-states.json').subscribe(response=>{
      let result:any = {};
      result = response;
      this.stateList = result;
      
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModaleComponent, {
      panelClass:['modal-md','success-modal']
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  register(){
    if(this.addadminform.valid)
    {
     
      let data:any={};
      delete this.addadminform.value.confirmpassword;
      data={
        "source": "user",
        "data": this.addadminform.value,
        "token": this.cookieservice.get('jwttoken')
    };
    
    this.apiservice.postDatawithoutToken('addorupdatedata',data).subscribe(res=>{
      let result:any = {};
      result = res;
      
      if(result.status=='success'){
        this.openDialog();
        setTimeout(()=>{
          this.dialog.closeAll();
        },2000);
        setTimeout(() => {
          this.router.navigateByUrl('/adminlist');

        }, 2100);
      }
      
    })

           
    }
    else{
      
    }


  }

  

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

    this.addadminform.patchValue({
      firstname:result.res[0].firstname,
      lastname:result.res[0].lastname,
      email:result.res[0].email,
      phone:result.res[0].phone,
      // password:result.res[0].password,
      // confirmpassword:result.res[0].confirmpassword,
      zip:result.res[0].zip,
      city:result.res[0].city,
      state:result.res[0].state

    })

  });

  
}
  
  
  inputBlur(val:any){
    
    this.addadminform.controls[val].markAsUntouched();
}
  

}


@Component({
  selector:'app-modale',
  templateUrl:'./modale.html'
})
export class ModaleComponent {
  constructor( public dialogRef: MatDialogRef<ModaleComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}