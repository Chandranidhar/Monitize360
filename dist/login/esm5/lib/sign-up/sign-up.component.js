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
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb, http, router, dialog, apiService) {
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
    Object.defineProperty(SignUpComponent.prototype, "userType", {
        set: /**
         * @param {?} typeval
         * @return {?}
         */
        function (typeval) {
            this.typevalue = typeval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = (formTitleVal) || '<no name set>';
            this.formTitleValue = formTitleVal;
            // console.log(this.formTitleValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            // console.log(this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "logo", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoValue = logoVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
            console.log(this.addEndpointValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "forgetRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.forgetRouteingUrlValue = routeingUrlval;
            // console.log(this.forgetRouteingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "loginRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.loginRouteingUrlValue = routeingUrlval;
            // console.log(this.loginRouteingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SignUpComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    };
    /********* Sign Up Form Submit start here*********/
    /**
     * ****** Sign Up Form Submit start here********
     * @return {?}
     */
    SignUpComponent.prototype.signUpFormSubmit = /**
     * ****** Sign Up Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        // use for validation checking
        for (var x in this.signUpForm.controls) {
            this.signUpForm.controls[x].markAsTouched();
        }
        if (this.signUpForm.valid) {
            if (this.signUpForm.value.confirmpassword != null) {
                delete this.signUpForm.value.confirmpassword;
            }
            /** @type {?} */
            var allData = this.signUpForm.value;
            allData.type = this.typevalue;
            console.log(allData);
            // let link: any = this.fullUrlValue;
            /** @type {?} */
            var data = {
                'data': allData,
                "source": this.addEndpointValue.source
            };
            console.log(data);
            this.apiService.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    _this.openDialog();
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialog.closeAll();
                    }), 3000);
                    _this.router.navigateByUrl('/login'); // navigate to dashboard url y
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                }
                else {
                    // display error message on html
                    _this.message = result.msg;
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    SignUpComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(commonModalComponent, {
            width: '250px',
            data: { name: 'this.name', animal: this.animal }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.animal = result;
        }));
    };
    /********* Sign Up Form Submit end here*********/
    // This is use for navigate this component to forget component 
    /**
     * ****** Sign Up Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to forget component 
    SignUpComponent.prototype.forgetpassword = /**
     * ****** Sign Up Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to forget component 
    function () {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
    };
    // This is use for navigate this component to forget component 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    SignUpComponent.prototype.login = 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SignUpComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.signUpForm.controls[val].markAsUntouched();
    };
    SignUpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sign-up',
                    template: "<div class=\"as_formdiv\">\r\n<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"signUpForm\"  (ngSubmit)=\"signUpFormSubmit()\" novalidate>\r\n\r\n\r\n      <mat-error class=\"error\" *ngIf=\"message != ''\">{{message}}</mat-error>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"firstname\" (blur)=\"inputUntouched('firstname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['firstname'].valid && signUpForm.controls['firstname'].errors.required && signUpForm.controls['firstname'].touched\">\r\n          First Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\" (blur)=\"inputUntouched('lastname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['lastname'].valid && signUpForm.controls['lastname'].errors.required && signUpForm.controls['lastname'].touched\">\r\n          Last Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].errors.required && signUpForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error *ngIf=\"!signUpForm.controls['email'].valid && !signUpForm.controls['email'].errors.required\">Email is\r\n          not valid</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <!-- added by sourav -->\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Phone Number\" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['phone'].valid && signUpForm.controls['phone'].errors.required && signUpForm.controls['phone'].touched\">\r\n          Phone Number field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n   <!-- added by sourav -->\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].errors.required && signUpForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n      </mat-form-field>\r\n      <!-- added by sourav -->\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\" type=\"password\" formControlName=\"confirmpassword\" (blur)=\"inputUntouched('confirmpassword')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['confirmpassword'].valid && signUpForm.controls['confirmpassword'].errors.required && signUpForm.controls['confirmpassword'].touched\">\r\n          Confirm Password field can not be blank</mat-error>\r\n          <mat-error *ngIf=\"signUpForm.hasError('mismatchedPasswords')\">Passwords must match</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Zip Code\" type=\"text\" formControlName=\"zip\" (blur)=\"inputUntouched('zip')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['zip'].valid && signUpForm.controls['zip'].errors.required && signUpForm.controls['zip'].touched\">\r\n          Zip field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" (blur)=\"inputUntouched('city')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['city'].valid && signUpForm.controls['city'].errors.required && signUpForm.controls['city'].touched\">\r\n          City field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n \r\n      <mat-form-field>\r\n      <mat-label>State</mat-label>\r\n      <mat-select formControlName=\"state\">\r\n        <mat-option *ngFor=\"let state of state_usss\" [value]=\"state.abbreviation\">\r\n          {{state.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company name\" type=\"text\" formControlName=\"companyname\">\r\n      \r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Designation in company\" type=\"text\" formControlName=\"designation\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company website\" type=\"text\" formControlName=\"companywebsite\">\r\n      </mat-form-field>\r\n\r\n\r\n      <!-- added by sourav -->\r\n\r\n      <button mat-raised-button color=\"primary\">Sign Up</button>\r\n      <span class=\"signupfooter\">\r\n        <a (click)=\"forgetpassword()\">Forget Password</a>\r\n        <a (click)=\"login()\">Login</a>\r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div></div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{min-height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    SignUpComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: MatDialog },
        { type: ApiService }
    ]; };
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
    return SignUpComponent;
}());
export { SignUpComponent };
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
var commonModalComponent = /** @class */ (function () {
    function commonModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    commonModalComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    commonModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'commonModal',
                    template: "<h1 mat-dialog-title>Thanks!</h1>\r\n<div mat-dialog-actions>\r\n  <p>Your account has been successfully created</p>\r\n  <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button  cdkFocusInitial>Ok</button> -->\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    commonModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return commonModalComponent;
}());
export { commonModalComponent };
if (false) {
    /** @type {?} */
    commonModalComponent.prototype.dialogRef;
    /** @type {?} */
    commonModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFFckUsZ0NBR0M7OztJQUZDLDRCQUFlOztJQUNmLDBCQUFhOztBQUVmO0lBdVRFLHlCQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsTUFBaUIsRUFBUyxVQUFzQjtRQUF4SCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpUcEksWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixlQUFVLEdBQUs7WUFDcEI7Z0JBQ0ksTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLGNBQWMsRUFBRSxJQUFJO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGNBQWMsRUFBRSxJQUFJO2FBQ3ZC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QWVDO1NBVlksb0JBQW9COzs7SUFHN0IseUNBQW9EOztJQUN0RCxvQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCwgVmlld0NoaWxkLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IG1hdGNoaW5nUGFzc3dvcmRzIH0gZnJvbSAnLi4vX2hlbHBlcnMvbXVzdC1tYXRjaC52YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICBhbmltYWw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2lnbi11cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ24tdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZ24tdXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcclxuICBhbmltYWw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHR5cGV2YWx1ZTogYW55O1xyXG4gIHB1YmxpYyBzdGF0ZV91c3NzOmFueT1bXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQWxhYmFtYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQUxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBbGFza2FcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkFLXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkFTXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQXJpem9uYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQVpcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBcmthbnNhc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQVJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJDYWxpZm9ybmlhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJDQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkNvbG9yYWRvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJDT1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkNvbm5lY3RpY3V0XCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJDVFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkRlbGF3YXJlXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJERVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJEQ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiRk1cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJGbG9yaWRhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJGTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkdlb3JnaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkdBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR3VhbVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiR1VcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJIYXdhaWlcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkhJXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSWRhaG9cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIklEXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSWxsaW5vaXNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIklMXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSW5kaWFuYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJb3dhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJJQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkthbnNhc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiS1NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJLZW50dWNreVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiS1lcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJMb3Vpc2lhbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkxBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWFpbmVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1FXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTUhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNYXJ5bGFuZFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTURcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNYXNzYWNodXNldHRzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pY2hpZ2FuXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNSVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pbm5lc290YVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNaXNzaXNzaXBwaVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTVNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNaXNzb3VyaVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTU9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNb250YW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNVFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5lYnJhc2thXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJORVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldmFkYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTlZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZXcgSGFtcHNoaXJlXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOSFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldyBKZXJzZXlcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5KXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV3IE1leGljb1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTk1cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZXcgWW9ya1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTllcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOb3J0aCBEYWtvdGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5EXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNUFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk9oaW9cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk9IXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiT2tsYWhvbWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk9LXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiT3JlZ29uXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJPUlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlBhbGF1XCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJQV1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiUEFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJQdWVydG8gUmljb1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiUFJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJSaG9kZSBJc2xhbmRcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlJJXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlNDXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU291dGggRGFrb3RhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJTRFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlRlbm5lc3NlZVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVE5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJUZXhhc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVFhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJVdGFoXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJVVFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlZlcm1vbnRcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlZUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlZJXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVmlyZ2luaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlZBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2FzaGluZ3RvblwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiV0FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJXZXN0IFZpcmdpbmlhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJXVlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIldpc2NvbnNpblwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiV0lcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJXeW9taW5nXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJXWVwiXHJcbiAgICB9XHJcbl07XHJcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBmb3JnZXRSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbG9naW5Sb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XHJcblxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB1c2VyVHlwZSh0eXBldmFsOiBhbnkpIHtcclxuICAgIHRoaXMudHlwZXZhbHVlID0gdHlwZXZhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBGb3JtIG5hbWVcclxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gKGZvcm1UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybVRpdGxlVmFsdWUpO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7XHJcblxyXG4gIH1cclxuQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xyXG5cclxuc2V0IGxvZ28obG9nb1ZhbCA6IGFueSkge1xyXG4gIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcclxufVxyXG5cclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgQW5kIHNvdXJjZVxyXG4gIHB1YmxpYyBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnRWYWw6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnRWYWw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50VmFsdWUpXHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgRm9yZ2V0IFBhc3N3b3JkIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgZm9yZ2V0Um91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xyXG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBsb2dpbiBVcmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IGxvZ2luUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xyXG4gICAgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBzaWduVXBGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZywgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2lnblVwRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXHJcbiAgICAgIGZpcnN0bmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgbGFzdG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29uZmlybXBhc3N3b3JkOltudWxsLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICB6aXA6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNpdHk6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHN0YXRlOltudWxsLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb21wYW55bmFtZTpbbnVsbF0sXHJcbiAgICAgIGRlc2lnbmF0aW9uOltudWxsXSxcclxuICAgICAgY29tcGFueXdlYnNpdGU6W251bGxdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiBtYXRjaGluZ1Bhc3N3b3JkcygncGFzc3dvcmQnLCAnY29uZmlybXBhc3N3b3JkJylcclxuXHJcbiAgICB9KTtcclxuICAgLy8gdGhpcy5vcGVuRGlhbG9nKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIHNlcnZlciB1cmxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxyXG4gICAgfSwgNTApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xyXG5cclxuXHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIGVuZHBvaW50XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5lbmRwb2ludCk7ICAgLy8gIHNldCB0aGUgZW5kcG9pbnRcclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG5cclxuLyoqKioqKioqKiBTaWduIFVwIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovIFxyXG4gIHNpZ25VcEZvcm1TdWJtaXQoKSB7XHJcbiAgIFxyXG4gIFxyXG4gICAgLy8gdXNlIGZvciB2YWxpZGF0aW9uIGNoZWNraW5nXHJcbiAgICBmb3IgKGxldCB4IGluIHRoaXMuc2lnblVwRm9ybS5jb250cm9scykge1xyXG4gICAgICB0aGlzLnNpZ25VcEZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2lnblVwRm9ybS52YWxpZCkge1xyXG4gICAgICBpZiAodGhpcy5zaWduVXBGb3JtLnZhbHVlLmNvbmZpcm1wYXNzd29yZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zaWduVXBGb3JtLnZhbHVlLmNvbmZpcm1wYXNzd29yZDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxldCBhbGxEYXRhOiBhbnkgPSB0aGlzLnNpZ25VcEZvcm0udmFsdWU7XHJcbiAgICAgICAgICAgICAgYWxsRGF0YS50eXBlID0gdGhpcy50eXBldmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxsRGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBsZXQgbGluazogYW55ID0gdGhpcy5mdWxsVXJsVmFsdWU7XHJcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgJ2RhdGEnOiBhbGxEYXRhLFxyXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcclxuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgIH0sMzAwMCk7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyApICAgICAvLyBuYXZpZ2F0ZSB0byBkYXNoYm9hcmQgdXJsIHlcclxuICAgICAgICAgIC8vIHRoaXMgaXMgdXNlIGZvciByZXNldCB0aGUgZnJvbVxyXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGNvbW1vbk1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7bmFtZTogJ3RoaXMubmFtZScsIGFuaW1hbDogdGhpcy5hbmltYWx9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hbmltYWwgPSByZXN1bHQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vKioqKioqKioqIFNpZ24gVXAgRm9ybSBTdWJtaXQgZW5kIGhlcmUqKioqKioqKiovIFxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcclxuICBmb3JnZXRwYXNzd29yZCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2lnblVwRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbW1vbk1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4uL2NvbW1vbk1vZGFsL2NvbW1vbk1vZGFsLmh0bWwnLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIGNvbW1vbk1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Y29tbW9uTW9kYWxDb21wb25lbnQ+LFxyXG4gIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=