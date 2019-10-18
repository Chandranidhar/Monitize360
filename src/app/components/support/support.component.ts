import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  public SupportForm: FormGroup;
  constructor(public cook: CookieService,public fb: FormBuilder) {this.supportFormgenarate(); }

  ngOnInit() {
    
  }
  supportFormgenarate(){
    let userdetails = this.cook.get('user_details');
    let cookie: any;
    cookie = JSON.parse(userdetails);
     
    this.SupportForm = this.fb.group({
      clientemail:[cookie.email,null],
      subject:[null,[Validators.required]],
      description:[null,[Validators.required]]
    });
  }

  SupportFormSubmit(){
    for (let x in this.SupportForm.controls) {
      this.SupportForm.controls[x].markAsTouched();
    }
    if(this.SupportForm.valid){
      console.log(this.SupportForm.value);
    }
  }


  inputUntouched(val: any) {
    this.SupportForm.controls[val].markAsUntouched();
  }
}
