// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApiService } from '../../services/api-service';
// import { CookieService } from 'ngx-cookie-service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import{CommonService} from '../../services/common.service';
// import { matchingPasswords } from '../../_helpers/must-match.validator';
// @Component({
//   selector: 'app-resetpassword',
//   templateUrl: './resetpassword.component.html',
//   styleUrls: ['./resetpassword.component.css']
// })
// export class ResetpasswordComponent implements OnInit {
// public resetpasswordForm: FormGroup;
//   constructor(public formBuilder: FormBuilder,public api_service: ApiService, public cookieservice: CookieService, public router: Router,public f: CommonService) {this.genarateresetForm(); }

//   ngOnInit() {
//   }

//   genarateresetForm(){
//     this.resetpasswordForm = this.formBuilder.group({
//       password: [null, [Validators.required, Validators.minLength(6)]],
//       conpassword:[null,[Validators.required,Validators.minLength(6)]]
//     }, {
//       validator: matchingPasswords('password', 'conpassword')
//     });
//   }

//   resetsubmit(){
//    if(this.resetpasswordForm.valid){
//     if (this.resetpasswordForm.value.conpassword != null) {
//       delete this.resetpasswordForm.value.conpassword;
//     }
    
//     let d: any = { 'source': 'user', 'data': {'id':this.cookieservice.get('id'),'password':this.resetpasswordForm.value.password},'token':this.cookieservice.get('jwttoken')};
//    //console.log(d);
//     this.api_service.postData('addorupdatedata', d).subscribe(res=> {
//       let result:any;
//       result = res;
//       console.log(result);
//     });
//    }
//    else
//    {
//      for (let x in this.resetpasswordForm.controls) {
//       // console.log(this.resetpasswordForm.controls[x]);
//        this.resetpasswordForm.controls[x].markAsTouched();
//      }
   
//    }
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public fromTitleName: any = 'Reset From';

  public logo: any = '';
  public serverUrl: any = this.apiService.api_url;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'user'
  };
  
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

}
  
