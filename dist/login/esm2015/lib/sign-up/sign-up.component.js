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
     */
    constructor(fb, http, router, dialog, apiService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.apiService = apiService;
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
            companywebsite: [null]
        }, {
            validator: matchingPasswords('password', 'confirmpassword')
        });
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
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
                "source": this.addEndpointValue.source
            };
            console.log(data);
            this.apiService.addData(data).subscribe((/**
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
    { type: ApiService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFFckUsZ0NBR0M7OztJQUZDLDRCQUFlOztJQUNmLDBCQUFhOztBQU9mLE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQWtUMUIsWUFBbUIsRUFBZSxFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLE1BQWlCLEVBQVMsVUFBc0I7UUFBeEgsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFqVHBJLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsZUFBVSxHQUFLO1lBQ3BCO2dCQUNJLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixjQUFjLEVBQUUsSUFBSTthQUN2QjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxRQUFRO2dCQUNo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WUFDVixNQUFNO1lBQ3lCLFNBQVM7WUFDeEMsVUFBVTs7OzRCQWdRaEIsU0FBUyxTQUFDLGtCQUFrQjt1QkFVNUIsS0FBSzt3QkFLTCxLQUFLO3dCQVFMLEtBQUs7bUJBT1AsS0FBSzswQkFPSCxLQUFLO2dDQU9MLEtBQUs7K0JBT0wsS0FBSzs7OztJQXRTTixrQ0FBeUI7O0lBQ3pCLGlDQUFlOztJQUNmLCtCQUFhOztJQUNiLG9DQUFzQjs7SUFDdEIscUNBNk9BOztJQUVBLHdDQUFpRTs7SUFFakUseUNBQWdDOztJQUNoQyx5Q0FBZ0M7O0lBQ2hDLGlEQUF3Qzs7SUFDeEMsZ0RBQXVDOztJQUN2QywyQ0FBa0M7O0lBQ2xDLG9DQUEyQjs7SUFxRDNCLHFDQUE2Qjs7SUFFakIsNkJBQXNCOztJQUFFLCtCQUF1Qjs7SUFBRSxpQ0FBcUI7O0lBQUUsaUNBQXdCOztJQUFFLHFDQUE2Qjs7QUE2SDdJLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBRS9CLFlBQ1MsU0FBNkMsRUFDdEIsSUFBZ0I7UUFEdkMsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFckQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwyUUFBOEM7YUFFL0M7Ozs7WUEzYnlCLFlBQVk7NENBZ2NuQyxNQUFNLFNBQUMsZUFBZTs7OztJQURyQix5Q0FBb0Q7O0lBQ3RELG9DQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0LCBWaWV3Q2hpbGQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgbWF0Y2hpbmdQYXNzd29yZHMgfSBmcm9tICcuLi9faGVscGVycy9tdXN0LW1hdGNoLnZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIGFuaW1hbDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zaWduLXVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbi11cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbi11cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xyXG4gIGFuaW1hbDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdHlwZXZhbHVlOiBhbnk7XHJcbiAgcHVibGljIHN0YXRlX3Vzc3M6YW55PVtcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBbGFiYW1hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFsYXNrYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQUtcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBbWVyaWNhbiBTYW1vYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQVNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBcml6b25hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBWlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFya2Fuc2FzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBUlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkNhbGlmb3JuaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkNBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ29sb3JhZG9cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkNPXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ29ubmVjdGljdXRcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkNUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGVsYXdhcmVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkRFXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGlzdHJpY3QgT2YgQ29sdW1iaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkRDXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJGTVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkZsb3JpZGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkZMXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR2VvcmdpYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiR0FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJHdWFtXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJHVVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkhhd2FpaVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSElcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJZGFob1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSURcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJbGxpbm9pc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSUxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJbmRpYW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJJTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIklvd2FcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIklBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiS2Fuc2FzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJLU1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIktlbnR1Y2t5XCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJLWVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkxvdWlzaWFuYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTEFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNYWluZVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTUVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNSFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1hcnlsYW5kXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNRFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1hc3NhY2h1c2V0dHNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1BXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWljaGlnYW5cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1JXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWlubmVzb3RhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pc3Npc3NpcHBpXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNU1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pc3NvdXJpXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNT1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1vbnRhbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1UXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmVicmFza2FcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5FXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV2YWRhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOVlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldyBIYW1wc2hpcmVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5IXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV3IEplcnNleVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkpcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZXcgTWV4aWNvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOTVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldyBZb3JrXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOWVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5vcnRoIENhcm9saW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOQ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5vcnRoIERha290YVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1QXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiT2hpb1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiT0hcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJPa2xhaG9tYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiT0tcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJPcmVnb25cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk9SXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFsYXVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlBXXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGVubnN5bHZhbmlhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJQQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlB1ZXJ0byBSaWNvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJQUlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlJob2RlIElzbGFuZFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiUklcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJTb3V0aCBDYXJvbGluYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiU0NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJTb3V0aCBEYWtvdGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlNEXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGVubmVzc2VlXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJUTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlRleGFzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJUWFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlV0YWhcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlVUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVmVybW9udFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVlRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJWaXJnaW4gSXNsYW5kc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVklcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJWaXJnaW5pYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVkFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJXYXNoaW5ndG9uXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJXQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIldlc3QgVmlyZ2luaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIldWXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2lzY29uc2luXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJXSVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIld5b21pbmdcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIldZXCJcclxuICAgIH1cclxuXTtcclxuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cclxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG5cclxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGZvcmdldFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBsb2dpblJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHVzZXJUeXBlKHR5cGV2YWw6IGFueSkge1xyXG4gICAgdGhpcy50eXBldmFsdWUgPSB0eXBldmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIEZvcm0gbmFtZVxyXG4gIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybFZhbHVlKTtcclxuXHJcbiAgfVxyXG5ASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXHJcblxyXG5zZXQgbG9nbyhsb2dvVmFsIDogYW55KSB7XHJcbiAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xyXG59XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBBbmQgc291cmNlXHJcbiAgcHVibGljIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludFZhbDogYW55KSB7XHJcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludFZhbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSlcclxuICB9XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IGxvZ2luIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgbG9naW5Sb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIHNpZ25VcEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xyXG4gICAgdGhpcy5zaWduVXBGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcclxuICAgICAgZmlyc3RuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBsYXN0bmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb25maXJtcGFzc3dvcmQ6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHppcDpbbnVsbCxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY2l0eTpbbnVsbCxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgc3RhdGU6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbXBhbnluYW1lOltudWxsXSxcclxuICAgICAgZGVzaWduYXRpb246W251bGxdLFxyXG4gICAgICBjb21wYW55d2Vic2l0ZTpbbnVsbF1cclxuICAgIH0sIHtcclxuICAgICAgICB2YWxpZGF0b3I6IG1hdGNoaW5nUGFzc3dvcmRzKCdwYXNzd29yZCcsICdjb25maXJtcGFzc3dvcmQnKVxyXG5cclxuICAgIH0pO1xyXG4gICAvLyB0aGlzLm9wZW5EaWFsb2coKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcblxyXG4vKioqKioqKioqIFNpZ24gVXAgRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXHJcbiAgc2lnblVwRm9ybVN1Ym1pdCgpIHtcclxuICAgXHJcbiAgXHJcbiAgICAvLyB1c2UgZm9yIHZhbGlkYXRpb24gY2hlY2tpbmdcclxuICAgIGZvciAobGV0IHggaW4gdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuc2lnblVwRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaWduVXBGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpZ25VcEZvcm0udmFsdWUuY29uZmlybXBhc3N3b3JkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNpZ25VcEZvcm0udmFsdWUuY29uZmlybXBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbGV0IGFsbERhdGE6IGFueSA9IHRoaXMuc2lnblVwRm9ybS52YWx1ZTtcclxuICAgICAgICAgICAgICBhbGxEYXRhLnR5cGUgPSB0aGlzLnR5cGV2YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxEYXRhKTtcclxuICAgICAgXHJcbiAgICAgIC8vIGxldCBsaW5rOiBhbnkgPSB0aGlzLmZ1bGxVcmxWYWx1ZTtcclxuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcclxuICAgICAgICAnZGF0YSc6IGFsbERhdGEsXHJcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZUFsbCgpO1xyXG4gICAgICAgICAgfSwzMDAwKTtcclxuICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nICkgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgeVxyXG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXHJcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGRpc3BsYXkgZXJyb3IgbWVzc2FnZSBvbiBodG1sXHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICBcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oY29tbW9uTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHtuYW1lOiAndGhpcy5uYW1lJywgYW5pbWFsOiB0aGlzLmFuaW1hbH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKioqKiogU2lnbiBVcCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi8gXHJcblxyXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxyXG4gIGZvcmdldHBhc3N3b3JkKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBmb3JnZXQgY29tcG9uZW50IFxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29tbW9uTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi4vY29tbW9uTW9kYWwvY29tbW9uTW9kYWwuaHRtbCcsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgY29tbW9uTW9kYWxDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxjb21tb25Nb2RhbENvbXBvbmVudD4sXHJcbiAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==