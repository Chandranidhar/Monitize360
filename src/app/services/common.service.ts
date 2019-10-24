import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  inputBlur(frm:any,val: any) {
    frm.controls[val].markAsUntouched();
  }
}
