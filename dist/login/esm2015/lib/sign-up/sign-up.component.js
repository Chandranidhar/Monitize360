/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';
import { matchingPasswords } from '../_helpers/must-match.validator';
import { CookieService } from 'ngx-cookie-service';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
    /** @type {?} */
    DialogData.prototype.name;
}
export class SignUpComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} dialog
     * @param {?} apiService
     * @param {?} cookieService
     */
    constructor(fb, http, router, dialog, apiService, cookieService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.message = '';
        this.state_usss = [
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
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.forgetRouteingUrlValue = '';
        this.loginRouteingUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.signUpForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required],
            confirmpassword: [null, Validators.required],
            zip: [null, Validators.required],
            city: [null, Validators.required],
            state: [null, Validators.required],
            companyname: [null],
            designation: [null],
            companywebsite: [null],
            status: 1
        }, {
            validator: matchingPasswords('password', 'confirmpassword')
        });
        /** @type {?} */
        let endpoint = 'gettemptoken';
        this.http.get(this.serverUrlValue + endpoint).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == "success") {
                this.cookieService.set('jwttoken', result.token);
            }
        }));
        // this.openDialog();
    }
    /**
     * @param {?} typeval
     * @return {?}
     */
    set userType(typeval) {
        this.typevalue = typeval;
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = (formTitleVal) || '<no name set>';
        this.formTitleValue = formTitleVal;
        // console.log(this.formTitleValue);
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
        // console.log(this.serverUrlValue);
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} addEndpointVal
     * @return {?}
     */
    set addEndpoint(addEndpointVal) {
        this.addEndpointValue = addEndpointVal;
        console.log(this.addEndpointValue);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set forgetRouteingUrl(routeingUrlval) {
        this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.forgetRouteingUrlValue = routeingUrlval;
        // console.log(this.forgetRouteingUrlValue);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set loginRouteingUrl(routeingUrlval) {
        this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.loginRouteingUrlValue = routeingUrlval;
        // console.log(this.loginRouteingUrlValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); //  Clear the server url
        // setTimeout(() => {
        this.apiService.setServerUrl(this.serverUrlValue); //  set the server url
        // }, 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        // setTimeout(() => {
        this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); //  set the endpoint
        // }, 50);
    }
    /**
     * ****** Sign Up Form Submit start here********
     * @return {?}
     */
    signUpFormSubmit() {
        // use for validation checking
        for (let x in this.signUpForm.controls) {
            this.signUpForm.controls[x].markAsTouched();
        }
        if (this.signUpForm.valid) {
            if (this.signUpForm.value.confirmpassword != null) {
                delete this.signUpForm.value.confirmpassword;
            }
            /** @type {?} */
            let allData = this.signUpForm.value;
            allData.type = this.typevalue;
            console.log(allData);
            // let link: any = this.fullUrlValue;
            /** @type {?} */
            let data = {
                'data': allData,
                "source": this.addEndpointValue.source,
                "token": this.cookieService.get('jwttoken')
            };
            console.log(data);
            this.apiService.signup(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                let result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    this.openDialog();
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.dialog.closeAll();
                    }), 3000);
                    this.router.navigateByUrl('/login'); // navigate to dashboard url y
                    // this is use for reset the from
                    this.formDirective.resetForm();
                }
                else {
                    // display error message on html
                    this.message = result.msg;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(commonModalComponent, {
            width: '250px',
            data: { name: 'this.name', animal: this.animal }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.animal = result;
        }));
    }
    /**
     * ****** Sign Up Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to forget component 
    forgetpassword() {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
    }
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    login() {
        this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.signUpForm.controls[val].markAsUntouched();
    }
}
SignUpComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sign-up',
                template: "<div class=\"as_formdiv\">\r\n<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"signUpForm\"  (ngSubmit)=\"signUpFormSubmit()\" novalidate>\r\n\r\n\r\n      <mat-error class=\"error\" *ngIf=\"message != ''\">{{message}}</mat-error>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"firstname\" (blur)=\"inputUntouched('firstname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['firstname'].valid && signUpForm.controls['firstname'].errors.required && signUpForm.controls['firstname'].touched\">\r\n          First Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\" (blur)=\"inputUntouched('lastname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['lastname'].valid && signUpForm.controls['lastname'].errors.required && signUpForm.controls['lastname'].touched\">\r\n          Last Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].errors.required && signUpForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error *ngIf=\"!signUpForm.controls['email'].valid && !signUpForm.controls['email'].errors.required\">Email is\r\n          not valid</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <!-- added by sourav -->\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Phone Number\" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['phone'].valid && signUpForm.controls['phone'].errors.required && signUpForm.controls['phone'].touched\">\r\n          Phone Number field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n   <!-- added by sourav -->\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].errors.required && signUpForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n      </mat-form-field>\r\n      <!-- added by sourav -->\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\" type=\"password\" formControlName=\"confirmpassword\" (blur)=\"inputUntouched('confirmpassword')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['confirmpassword'].valid && signUpForm.controls['confirmpassword'].errors.required && signUpForm.controls['confirmpassword'].touched\">\r\n          Confirm Password field can not be blank</mat-error>\r\n          <mat-error *ngIf=\"signUpForm.hasError('mismatchedPasswords')\">Passwords must match</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Zip Code\" type=\"text\" formControlName=\"zip\" (blur)=\"inputUntouched('zip')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['zip'].valid && signUpForm.controls['zip'].errors.required && signUpForm.controls['zip'].touched\">\r\n          Zip field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" (blur)=\"inputUntouched('city')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['city'].valid && signUpForm.controls['city'].errors.required && signUpForm.controls['city'].touched\">\r\n          City field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n \r\n      <mat-form-field>\r\n      <mat-label>State</mat-label>\r\n      <mat-select formControlName=\"state\">\r\n        <mat-option *ngFor=\"let state of state_usss\" [value]=\"state.abbreviation\">\r\n          {{state.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company name\" type=\"text\" formControlName=\"companyname\">\r\n      \r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Designation in company\" type=\"text\" formControlName=\"designation\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company website\" type=\"text\" formControlName=\"companywebsite\">\r\n      </mat-form-field>\r\n\r\n\r\n      <!-- added by sourav -->\r\n\r\n      <button mat-raised-button color=\"primary\">Sign Up</button>\r\n      <span class=\"signupfooter\">\r\n        <a (click)=\"forgetpassword()\">Forget Password</a>\r\n        <a (click)=\"login()\">Login</a>\r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div></div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{min-height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
SignUpComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: MatDialog },
    { type: ApiService },
    { type: CookieService }
];
SignUpComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    userType: [{ type: Input }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    logo: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    forgetRouteingUrl: [{ type: Input }],
    loginRouteingUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SignUpComponent.prototype.message;
    /** @type {?} */
    SignUpComponent.prototype.animal;
    /** @type {?} */
    SignUpComponent.prototype.name;
    /** @type {?} */
    SignUpComponent.prototype.typevalue;
    /** @type {?} */
    SignUpComponent.prototype.state_usss;
    /** @type {?} */
    SignUpComponent.prototype.formDirective;
    /** @type {?} */
    SignUpComponent.prototype.formTitleValue;
    /** @type {?} */
    SignUpComponent.prototype.serverUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.forgetRouteingUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.loginRouteingUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.addEndpointValue;
    /** @type {?} */
    SignUpComponent.prototype.logoValue;
    /** @type {?} */
    SignUpComponent.prototype.signUpForm;
    /** @type {?} */
    SignUpComponent.prototype.fb;
    /** @type {?} */
    SignUpComponent.prototype.http;
    /** @type {?} */
    SignUpComponent.prototype.router;
    /** @type {?} */
    SignUpComponent.prototype.dialog;
    /** @type {?} */
    SignUpComponent.prototype.apiService;
    /** @type {?} */
    SignUpComponent.prototype.cookieService;
}
export class commonModalComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
commonModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'commonModal',
                template: "<h1 mat-dialog-title>Thanks!</h1>\r\n<div mat-dialog-actions>\r\n  <p>Your account has been successfully created</p>\r\n  <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button  cdkFocusInitial>Ok</button> -->\r\n</div>"
            }] }
];
/** @nocollapse */
commonModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    commonModalComponent.prototype.dialogRef;
    /** @type {?} */
    commonModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELGdDQUdDOzs7SUFGQyw0QkFBZTs7SUFDZiwwQkFBYTs7QUFPZixNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7O0lBa1QxQixZQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsTUFBaUIsRUFBUyxVQUFzQixFQUFTLGFBQTRCO1FBQTdKLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFqVHpLLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsZUFBVSxHQUFLO1lBQ3BC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R0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXJELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMlFBQThDO2FBRS9DOzs7O1lBMWN5QixZQUFZOzRDQStjbkMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEckIseUNBQW9EOztJQUN0RCxvQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCwgVmlld0NoaWxkLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IG1hdGNoaW5nUGFzc3dvcmRzIH0gZnJvbSAnLi4vX2hlbHBlcnMvbXVzdC1tYXRjaC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgYW5pbWFsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXNpZ24tdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduLXVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWduLXVwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XHJcbiAgYW5pbWFsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB0eXBldmFsdWU6IGFueTtcclxuICBwdWJsaWMgc3RhdGVfdXNzczphbnk9W1xyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFsYWJhbWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkFMXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQWxhc2thXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBS1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFtZXJpY2FuIFNhbW9hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBU1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFyaXpvbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkFaXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQXJrYW5zYXNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkFSXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FsaWZvcm5pYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQ0FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJDb2xvcmFkb1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQ09cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJDb25uZWN0aWN1dFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQ1RcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJEZWxhd2FyZVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiREVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiRENcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkZNXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRmxvcmlkYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiRkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJHZW9yZ2lhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJHQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkd1YW1cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkdVXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSGF3YWlpXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJISVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIklkYWhvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJJRFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIklsbGlub2lzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJJTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkluZGlhbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIklOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSW93YVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSUFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJLYW5zYXNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIktTXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiS2VudHVja3lcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIktZXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTG91aXNpYW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJMQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1haW5lXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNRVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1hcnNoYWxsIElzbGFuZHNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1IXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWFyeWxhbmRcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1EXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWFzc2FjaHVzZXR0c1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTUFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNaWNoaWdhblwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTUlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNaW5uZXNvdGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1OXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWlzc2lzc2lwcGlcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1TXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWlzc291cmlcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1PXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTW9udGFuYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTVRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZWJyYXNrYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZXZhZGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5WXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV3IEhhbXBzaGlyZVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZXcgSmVyc2V5XCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOSlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldyBNZXhpY29cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5NXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV3IFlvcmtcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5ZXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTm9ydGggQ2Fyb2xpbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5DXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTm9ydGggRGFrb3RhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJORFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTVBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJPaGlvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJPSFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk9rbGFob21hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJPS1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk9yZWdvblwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiT1JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJQYWxhdVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiUFdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJQZW5uc3lsdmFuaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlBBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUHVlcnRvIFJpY29cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlBSXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUmhvZGUgSXNsYW5kXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJSSVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlNvdXRoIENhcm9saW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJTQ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlNvdXRoIERha290YVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiU0RcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJUZW5uZXNzZWVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlROXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGV4YXNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlRYXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVXRhaFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVVRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJWZXJtb250XCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJWVFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJWSVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlZpcmdpbmlhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJWQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIldhc2hpbmd0b25cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIldBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2VzdCBWaXJnaW5pYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiV1ZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJXaXNjb25zaW5cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIldJXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV3lvbWluZ1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiV1lcIlxyXG4gICAgfVxyXG5dO1xyXG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxyXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XHJcblxyXG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGxvZ2luUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xyXG5cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdXNlclR5cGUodHlwZXZhbDogYW55KSB7XHJcbiAgICB0aGlzLnR5cGV2YWx1ZSA9IHR5cGV2YWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgRm9ybSBuYW1lXHJcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xyXG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IChmb3JtVGl0bGVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSBmb3JtVGl0bGVWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1UaXRsZVZhbHVlKTtcclxuXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsVmFsdWUpO1xyXG5cclxuICB9XHJcbkBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cclxuXHJcbnNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcclxuICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XHJcbn1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IEFuZCBzb3VyY2VcclxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcclxuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludFZhbHVlKVxyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IGZvcmdldFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgbG9naW4gVXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBsb2dpblJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcclxuICAgIHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgc2lnblVwRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge1xyXG4gICAgICAgdGhpcy5zaWduVXBGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcclxuICAgICAgZmlyc3RuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBsYXN0bmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb25maXJtcGFzc3dvcmQ6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHppcDpbbnVsbCxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY2l0eTpbbnVsbCxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgc3RhdGU6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbXBhbnluYW1lOltudWxsXSxcclxuICAgICAgZGVzaWduYXRpb246W251bGxdLFxyXG4gICAgICBjb21wYW55d2Vic2l0ZTpbbnVsbF0sXHJcbiAgICAgIHN0YXR1czoxXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiBtYXRjaGluZ1Bhc3N3b3JkcygncGFzc3dvcmQnLCAnY29uZmlybXBhc3N3b3JkJylcclxuXHJcbiAgICB9KTtcclxuXHJcbmxldCBlbmRwb2ludDogYW55ID0gJ2dldHRlbXB0b2tlbic7XHJcbiAgICB0aGlzLmh0dHAuZ2V0KCB0aGlzLnNlcnZlclVybFZhbHVlK2VuZHBvaW50KS5zdWJzY3JpYmUocmVzPT57XHJcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICByZXN1bHQgPSByZXM7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnand0dG9rZW4nLCByZXN1bHQudG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAvLyB0aGlzLm9wZW5EaWFsb2coKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICAvLyB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgLy8gfSwgNTApO1xyXG4gICBcclxuXHJcbiAgfVxyXG5cclxuXHJcbi8qKioqKioqKiogU2lnbiBVcCBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcclxuICBzaWduVXBGb3JtU3VibWl0KCkge1xyXG4gICBcclxuICBcclxuICAgIC8vIHVzZSBmb3IgdmFsaWRhdGlvbiBjaGVja2luZ1xyXG4gICAgZm9yIChsZXQgeCBpbiB0aGlzLnNpZ25VcEZvcm0uY29udHJvbHMpIHtcclxuICAgICAgdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpZ25VcEZvcm0udmFsaWQpIHtcclxuICAgICAgaWYgKHRoaXMuc2lnblVwRm9ybS52YWx1ZS5jb25maXJtcGFzc3dvcmQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2lnblVwRm9ybS52YWx1ZS5jb25maXJtcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgYWxsRGF0YTogYW55ID0gdGhpcy5zaWduVXBGb3JtLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGFsbERhdGEudHlwZSA9IHRoaXMudHlwZXZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbERhdGEpO1xyXG4gICAgICBcclxuICAgICAgLy8gbGV0IGxpbms6IGFueSA9IHRoaXMuZnVsbFVybFZhbHVlO1xyXG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICdkYXRhJzogYWxsRGF0YSxcclxuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUuc291cmNlLFxyXG4gICAgICAgIFwidG9rZW5cIjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0dG9rZW4nKVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2Uuc2lnbnVwKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIFxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgfSwzMDAwKTtcclxuICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicgKSAgICAgLy8gbmF2aWdhdGUgdG8gZGFzaGJvYXJkIHVybCB5XHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxyXG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICBcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oY29tbW9uTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHtuYW1lOiAndGhpcy5uYW1lJywgYW5pbWFsOiB0aGlzLmFuaW1hbH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKioqKiogU2lnbiBVcCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi8gXHJcblxyXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxyXG4gIGZvcmdldHBhc3N3b3JkKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29tbW9uTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi4vY29tbW9uTW9kYWwvY29tbW9uTW9kYWwuaHRtbCcsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgY29tbW9uTW9kYWxDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxjb21tb25Nb2RhbENvbXBvbmVudD4sXHJcbiAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==