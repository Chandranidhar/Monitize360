/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, http, router, apiService) {
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
    Object.defineProperty(ForgetPasswordComponent.prototype, "domanUrl", {
        set: /**
         * @param {?} domanUrlVal
         * @return {?}
         */
        function (domanUrlVal) {
            this.domanUrlValue = (domanUrlVal) || '<no name set>';
            this.domanUrlValue = domanUrlVal;
            console.log(this.domanUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = (formTitleVal) || '<no name set>';
            this.formTitleValue = formTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "logo", {
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
    Object.defineProperty(ForgetPasswordComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointval
         * @return {?}
         */
        function (addEndpointval) {
            this.addEndpointValue = addEndpointval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "signUpRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.signUpRouteingUrlValue = routeingUrlval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ForgetPasswordComponent.prototype.ngOnInit = /**
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
    /********* Forget password  Form Submit start here*********/
    /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    ForgetPasswordComponent.prototype.forgetPasswordSubmit = /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var x;
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) {
            /** @type {?} */
            var link = this.serverUrlValue;
            /** @type {?} */
            var data = this.forgetPasswordForm.value;
            data.domanUrl = this.domanUrlValue;
            this.apiService.forgetPassword(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                console.log(response);
                /** @type {?} */
                var result = {};
                result = response;
                if (result.status == "success") {
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
    /********* Forget password  Form Submit end here*********/
    // This is use for navigate this component to sign-Up component 
    /**
     * ****** Forget password  Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    ForgetPasswordComponent.prototype.signup = /**
     * ****** Forget password  Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    function () {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ForgetPasswordComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.forgetPasswordForm.controls[val].markAsUntouched();
    };
    ForgetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-forget-password',
                    template: "<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\r\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error\r\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\r\n          Email is not valid</mat-error>\r\n      </mat-form-field>\r\n\r\n      <button mat-raised-button color=\"primary\">Forget Password</button>\r\n      <span class=\"signupfooter\">\r\n        <a (click)=\"signup()\">Sign Up</a>\r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ApiService }
    ]; };
    ForgetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        domanUrl: [{ type: Input }],
        formTitle: [{ type: Input }],
        serverUrl: [{ type: Input }],
        logo: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        signUpRouteingUrl: [{ type: Input }]
    };
    return ForgetPasswordComponent;
}());
export { ForgetPasswordComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7SUEyREUsaUNBQW1CLEVBQWUsRUFBVSxJQUFnQixFQUFTLE1BQWMsRUFBUyxVQUFxQjtRQUE5RixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBckQxRyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBTWxCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNoQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQThDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEs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O0lBQUUsdUNBQXdCOztJQUFFLHlDQUFxQjs7SUFBRSw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZm9yZ2V0LXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xyXG5cclxuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cclxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG5cclxuICBwdWJsaWMgZm9yZ2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2VydmVyVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcclxuICBwcml2YXRlIGRvbWFuVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IGVtYWlsIERvbWFuIFVSTFxyXG4gIHNldCBkb21hblVybChkb21hblVybFZhbDogYW55KSB7XHJcbiAgICB0aGlzLmRvbWFuVXJsVmFsdWUgPSAoZG9tYW5VcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZG9tYW5VcmxWYWx1ZSA9IGRvbWFuVXJsVmFsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kb21hblVybFZhbHVlKTtcclxuICB9XHJcbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgbmFtZVxyXG4gIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cclxuXHJcbnNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcclxuICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XHJcbn1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBhbmQgc291cmNlXHJcbiAgXHJcbiAgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50dmFsIDogYW55KSB7XHJcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludHZhbDtcclxuICB9XHJcbiAgXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFNpZ24gVXAgVXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBzaWduVXBSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHtcclxuXHJcbiAgXHJcblxyXG4gICAgdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxyXG5cclxuICAgIH0pO1xyXG4gIFxyXG5cclxuXHJcbiAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIHNlcnZlciB1cmxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxyXG4gICAgfSwgNTApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xyXG5cclxuXHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIGVuZHBvaW50XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5lbmRwb2ludCk7ICAgLy8gIHNldCB0aGUgZW5kcG9pbnRcclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4vKioqKioqKioqIEZvcmdldCBwYXNzd29yZCAgRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXHJcbiAgZm9yZ2V0UGFzc3dvcmRTdWJtaXQoKSB7XHJcbiAgICBsZXQgeDogYW55O1xyXG4gICAgZm9yICh4IGluIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWxpZCkge1xyXG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5zZXJ2ZXJVcmxWYWx1ZTtcclxuICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLnZhbHVlO1xyXG5cclxuICAgICAgZGF0YS5kb21hblVybCA9IHRoaXMuZG9tYW5VcmxWYWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5mb3JnZXRQYXNzd29yZChkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cclxuICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcclxuICAgICAgICB9IGVsc2V7XHJcblxyXG4gICAgICAgICAgIC8vIGRpc3BsYXkgZXJyb3IgbWVzc2FnZSBvbiBodG1sXHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi8gXHJcblxyXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBzaWduLVVwIGNvbXBvbmVudCBcclxuICBzaWdudXAoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=