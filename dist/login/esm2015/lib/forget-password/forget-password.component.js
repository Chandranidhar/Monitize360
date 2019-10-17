/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
export class ForgetPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} apiService
     */
    constructor(fb, http, router, apiService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.message = '';
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.signUpRouteingUrlValue = '';
        this.domanUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.forgetPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        });
    }
    /**
     * @param {?} domanUrlVal
     * @return {?}
     */
    set domanUrl(domanUrlVal) {
        this.domanUrlValue = (domanUrlVal) || '<no name set>';
        this.domanUrlValue = domanUrlVal;
        console.log(this.domanUrlValue);
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = (formTitleVal) || '<no name set>';
        this.formTitleValue = formTitleVal;
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} addEndpointval
     * @return {?}
     */
    set addEndpoint(addEndpointval) {
        this.addEndpointValue = addEndpointval;
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set signUpRouteingUrl(routeingUrlval) {
        this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.signUpRouteingUrlValue = routeingUrlval;
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
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    forgetPasswordSubmit() {
        /** @type {?} */
        let x;
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) {
            /** @type {?} */
            let link = this.serverUrlValue;
            /** @type {?} */
            let data = this.forgetPasswordForm.value;
            data.domanUrl = this.domanUrlValue;
            this.apiService.forgetPassword(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                console.log(response);
                /** @type {?} */
                let result = {};
                result = response;
                if (result.status == "success") {
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
     * ****** Forget password  Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    signup() {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.forgetPasswordForm.controls[val].markAsUntouched();
    }
}
ForgetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-forget-password',
                template: "<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\r\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error\r\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\r\n          Email is not valid</mat-error>\r\n      </mat-form-field>\r\n\r\n      <button mat-raised-button color=\"primary\">Forget Password</button>\r\n      <span class=\"signupfooter\">\r\n        <a (click)=\"signup()\">Sign Up</a>\r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ForgetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: ApiService }
];
ForgetPasswordComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    domanUrl: [{ type: Input }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    logo: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    signUpRouteingUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ForgetPasswordComponent.prototype.message;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ForgetPasswordComponent.prototype.forgetPasswordForm;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formTitleValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.signUpRouteingUrlValue;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.domanUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.http;
    /** @type {?} */
    ForgetPasswordComponent.prototype.router;
    /** @type {?} */
    ForgetPasswordComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPNUMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQXNEbEMsWUFBbUIsRUFBZSxFQUFVLElBQWdCLEVBQVMsTUFBYyxFQUFTLFVBQXFCO1FBQTlGLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVc7UUFyRDFHLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFNbEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsMkJBQXNCLEdBQVEsRUFBRSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBOEN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENB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b0JBQzlCLGlDQUFpQztvQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDaEM7cUJBQUs7b0JBRUgsZ0NBQWdDO29CQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBRTNCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFHRCxjQUFjLENBQUMsR0FBUTtRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFELENBQUM7OztZQWhJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNHlDQUErQzs7YUFFaEQ7Ozs7WUFUbUIsV0FBVztZQUN0QixVQUFVO1lBQ1YsTUFBTTtZQUNOLFVBQVU7Ozs0QkFXaEIsU0FBUyxTQUFDLGtCQUFrQjt1QkFXNUIsS0FBSzt3QkFNTCxLQUFLO3dCQU9MLEtBQUs7bUJBT0wsS0FBSzswQkFNTCxLQUFLO2dDQU9MLEtBQUs7Ozs7SUEvQ04sMENBQXlCOztJQUd6QixnREFBaUU7O0lBRWpFLHFEQUFxQzs7SUFDckMsaURBQWdDOztJQUNoQyxpREFBZ0M7O0lBQ2hDLHlEQUF3Qzs7Ozs7SUFDeEMsZ0RBQWdDOztJQUNoQyxtREFBa0M7O0lBQ2xDLDRDQUEyQjs7SUEwQ2YscUNBQXNCOzs7OztJQUFFLHVDQUF3Qjs7SUFBRSx5Q0FBcUI7O0lBQUUsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWZvcmdldC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcclxuXHJcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuXHJcbiAgcHVibGljIGZvcmdldFBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHJpdmF0ZSBkb21hblVybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBlbWFpbCBEb21hbiBVUkxcclxuICBzZXQgZG9tYW5VcmwoZG9tYW5VcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5kb21hblVybFZhbHVlID0gKGRvbWFuVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmRvbWFuVXJsVmFsdWUgPSBkb21hblVybFZhbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYW5VcmxWYWx1ZSk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcclxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gKGZvcm1UaXRsZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcclxuXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcclxuXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXHJcblxyXG5zZXQgbG9nbyhsb2dvVmFsIDogYW55KSB7XHJcbiAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xyXG59XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgYW5kIHNvdXJjZVxyXG4gIFxyXG4gIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludHZhbCA6IGFueSkge1xyXG4gICAgdGhpcy5hZGRFbmRwb2ludFZhbHVlID0gYWRkRW5kcG9pbnR2YWw7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2lnblVwUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xyXG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7XHJcblxyXG4gIFxyXG5cclxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcclxuXHJcbiAgICB9KTtcclxuICBcclxuXHJcblxyXG4gIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybFZhbHVlKTsgICAgICAgIC8vICBzZXQgdGhlIHNlcnZlciB1cmxcclxuICAgIH0sIDUwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcclxuXHJcblxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gIENsZWFyIHRoZSBlbmRwb2ludFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgIC8vICBzZXQgdGhlIGVuZHBvaW50XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuLyoqKioqKioqKiBGb3JnZXQgcGFzc3dvcmQgIEZvcm0gU3VibWl0IHN0YXJ0IGhlcmUqKioqKioqKiovIFxyXG4gIGZvcmdldFBhc3N3b3JkU3VibWl0KCkge1xyXG4gICAgbGV0IHg6IGFueTtcclxuICAgIGZvciAoeCBpbiB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xyXG4gICAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JnZXRQYXNzd29yZEZvcm0udmFsaWQpIHtcclxuICAgICAgbGV0IGxpbms6IGFueSA9IHRoaXMuc2VydmVyVXJsVmFsdWU7XHJcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWx1ZTtcclxuXHJcbiAgICAgIGRhdGEuZG9tYW5VcmwgPSB0aGlzLmRvbWFuVXJsVmFsdWU7XHJcblxyXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuZm9yZ2V0UGFzc3dvcmQoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXHJcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgfSBlbHNle1xyXG5cclxuICAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4vKioqKioqKioqIEZvcmdldCBwYXNzd29yZCAgRm9ybSBTdWJtaXQgZW5kIGhlcmUqKioqKioqKiovIFxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gc2lnbi1VcCBjb21wb25lbnQgXHJcbiAgc2lnbnVwKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19