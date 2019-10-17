import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public UpdateForm: FormGroup;
  public state_usss: any = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    },
    {
      "name": "Alaska",
      "abbreviation": "AK"
    },
    {
      "name": "American Samoa",
      "abbreviation": "AS"
    },
    {
      "name": "Arizona",
      "abbreviation": "AZ"
    },
    {
      "name": "Arkansas",
      "abbreviation": "AR"
    },
    {
      "name": "California",
      "abbreviation": "CA"
    },
    {
      "name": "Colorado",
      "abbreviation": "CO"
    },
    {
      "name": "Connecticut",
      "abbreviation": "CT"
    },
    {
      "name": "Delaware",
      "abbreviation": "DE"
    },
    {
      "name": "District Of Columbia",
      "abbreviation": "DC"
    },
    {
      "name": "Federated States Of Micronesia",
      "abbreviation": "FM"
    },
    {
      "name": "Florida",
      "abbreviation": "FL"
    },
    {
      "name": "Georgia",
      "abbreviation": "GA"
    },
    {
      "name": "Guam",
      "abbreviation": "GU"
    },
    {
      "name": "Hawaii",
      "abbreviation": "HI"
    },
    {
      "name": "Idaho",
      "abbreviation": "ID"
    },
    {
      "name": "Illinois",
      "abbreviation": "IL"
    },
    {
      "name": "Indiana",
      "abbreviation": "IN"
    },
    {
      "name": "Iowa",
      "abbreviation": "IA"
    },
    {
      "name": "Kansas",
      "abbreviation": "KS"
    },
    {
      "name": "Kentucky",
      "abbreviation": "KY"
    },
    {
      "name": "Louisiana",
      "abbreviation": "LA"
    },
    {
      "name": "Maine",
      "abbreviation": "ME"
    },
    {
      "name": "Marshall Islands",
      "abbreviation": "MH"
    },
    {
      "name": "Maryland",
      "abbreviation": "MD"
    },
    {
      "name": "Massachusetts",
      "abbreviation": "MA"
    },
    {
      "name": "Michigan",
      "abbreviation": "MI"
    },
    {
      "name": "Minnesota",
      "abbreviation": "MN"
    },
    {
      "name": "Mississippi",
      "abbreviation": "MS"
    },
    {
      "name": "Missouri",
      "abbreviation": "MO"
    },
    {
      "name": "Montana",
      "abbreviation": "MT"
    },
    {
      "name": "Nebraska",
      "abbreviation": "NE"
    },
    {
      "name": "Nevada",
      "abbreviation": "NV"
    },
    {
      "name": "New Hampshire",
      "abbreviation": "NH"
    },
    {
      "name": "New Jersey",
      "abbreviation": "NJ"
    },
    {
      "name": "New Mexico",
      "abbreviation": "NM"
    },
    {
      "name": "New York",
      "abbreviation": "NY"
    },
    {
      "name": "North Carolina",
      "abbreviation": "NC"
    },
    {
      "name": "North Dakota",
      "abbreviation": "ND"
    },
    {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
    },
    {
      "name": "Ohio",
      "abbreviation": "OH"
    },
    {
      "name": "Oklahoma",
      "abbreviation": "OK"
    },
    {
      "name": "Oregon",
      "abbreviation": "OR"
    },
    {
      "name": "Palau",
      "abbreviation": "PW"
    },
    {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    },
    {
      "name": "Puerto Rico",
      "abbreviation": "PR"
    },
    {
      "name": "Rhode Island",
      "abbreviation": "RI"
    },
    {
      "name": "South Carolina",
      "abbreviation": "SC"
    },
    {
      "name": "South Dakota",
      "abbreviation": "SD"
    },
    {
      "name": "Tennessee",
      "abbreviation": "TN"
    },
    {
      "name": "Texas",
      "abbreviation": "TX"
    },
    {
      "name": "Utah",
      "abbreviation": "UT"
    },
    {
      "name": "Vermont",
      "abbreviation": "VT"
    },
    {
      "name": "Virgin Islands",
      "abbreviation": "VI"
    },
    {
      "name": "Virginia",
      "abbreviation": "VA"
    },
    {
      "name": "Washington",
      "abbreviation": "WA"
    },
    {
      "name": "West Virginia",
      "abbreviation": "WV"
    },
    {
      "name": "Wisconsin",
      "abbreviation": "WI"
    },
    {
      "name": "Wyoming",
      "abbreviation": "WY"
    }
  ];
  constructor(public fb: FormBuilder, public router: Router, public dialog: MatDialog,public apiService: ApiService, public cook: CookieService) {
    this.UpdateForm = this.fb.group({
      id: [null, null],
    email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    phone: [null, Validators.required],
    zip:[null,Validators.required],
    city:[null,Validators.required],
    state:[null,Validators.required],
    companyname:[null],
    designation:[null],
    companywebsite:[null]
  });
    
  this.genarateupdateform();
  }

  ngOnInit() {
  }
  genarateupdateform() {
    let userdetails = this.cook.get('userdetails');
    let cookie: any;
    cookie = JSON.parse(userdetails);
    // console.log(cookie[0].email);
    
    this.UpdateForm.patchValue({
      id:cookie[0]._id,
      email: cookie[0].email,
      firstname: cookie[0].firstname,
      lastname: cookie[0].lastname,
      phone: cookie[0].phone,
      zip: cookie[0].zip,
      city: cookie[0].city,
      state: cookie[0].state,
      companyname: cookie[0].companyname,
      designation: cookie[0].designation,
      companywebsite: cookie[0].companywebsite,
    });
  }

  // machpassword(passwordkye: string, confirmpasswordkye: string) {
  //   return (group: FormGroup) => {
  //     let passwordInput = group.controls[passwordkye],
  //       confirmpasswordInput = group.controls[confirmpasswordkye];
  //     if (passwordInput.value !== confirmpasswordInput.value) {
  //       return confirmpasswordInput.setErrors({ notEquivalent: true });
  //     }
  //     else {
  //       return confirmpasswordInput.setErrors(null);
  //     }
  //   };
  // }

  UpdateFormSubmit() {
    for (let x in this.UpdateForm.controls) {
      this.UpdateForm.controls[x].markAsTouched();
    }

    if (this.UpdateForm.valid) { 
      console.log(this.UpdateForm.value);
      let data: any = { 'source': 'user',  'data': this.UpdateForm.value };
      this.apiService.postData('addorupdatedata', data).subscribe((data) => {
        console.log(data);
      });
     }

  }

  inputUntouched(val: any) {
    this.UpdateForm.controls[val].markAsUntouched();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(commonModalComponent, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}




@Component({
  selector: 'commonModal',
  templateUrl: '../commonModal/commonModal.html',
})
export class commonModalComponent {
  public resetForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<commonModalComponent>,  public fbb: FormBuilder,public cook: CookieService,public apiService: ApiService) {
    let userdetails = this.cook.get('userdetails');
        let cookie: any;
        cookie = JSON.parse(userdetails);
        
    this.resetForm = this.fbb.group({
      id: [cookie[0]._id, null],
      oldpass: [null, Validators.required],
      newpass: [null, Validators.required],
      conpass: [null, Validators.required],
  });
   }

  resetFormSubmit(){
    for (let x in this.resetForm.controls) {
      this.resetForm.controls[x].markAsTouched();
    }
    if(this.resetForm.valid){
      if(this.resetForm.value.conpass!=null){
        delete this.resetForm.value.conpass;
        delete this.resetForm.value.oldpass;
        //let data: any = { 'source': 'user',  'data': {"password":this.resetForm.value.password,"id":this.resetForm.value.id} };
      //   this.apiService.postData('addorupdatedata', data).subscribe((data) => {
      //     console.log(data);
      // })
      }
    }
  }


  inputUntouched(val: any) {
    this.resetForm.controls[val].markAsUntouched();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
