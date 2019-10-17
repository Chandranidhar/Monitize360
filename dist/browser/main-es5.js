(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forget/forget/forget.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forget/forget/forget.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotsubmit()\" class=\"loginform\">\n    <div class=\"formgroup\">\n\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"f.inputBlur(forgotForm,'email')\"/>\n        <mat-error *ngIf=\"forgotForm.controls['email']?.touched && forgotForm.controls['email'].errors && forgotForm.controls['email'].errors.required\" class=\"errormsgblue\">Email is required !</mat-error>\n        <mat-error *ngIf=\"forgotForm.controls['email']?.touched && forgotForm.controls['email'].errors && forgotForm.controls['email'].errors.pattern\" class=\"errormsgblue\">Please Check Your Email !</mat-error>\n\n    </div>\n    <button mat-button class=\"orangegradientbutton\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Login</h3>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"loginsubmit()\" class=\"loginform\">\n    <div class=\"formgroup\">\n\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"f.inputBlur(loginForm,'email')\"/>\n        <mat-error *ngIf=\"loginForm.controls['email']?.touched && loginForm.controls['email'].errors && loginForm.controls['email'].errors.required\" class=\"errormsgblue\">Email is required !</mat-error>\n        <mat-error *ngIf=\"loginForm.controls['email']?.touched && loginForm.controls['email'].errors && loginForm.controls['email'].errors.pattern\" class=\"errormsgblue\">Please Check Your Email !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (blur)=\"f.inputBlur(loginForm,'password')\"/>\n        <mat-error *ngIf=\"loginForm.controls['password']?.touched && loginForm.controls['password'].errors && loginForm.controls['password'].errors.required\" class=\"errormsgblue\">Password is required !</mat-error>\n        <mat-error *ngIf=\"loginForm.controls['password']?.touched && loginForm.controls['password'].errors && loginForm.controls['password'].errors.minlength\" class=\"errormsgblue\">Password is too short !</mat-error>\n\n    </div>\n    <div class=\"formgroup loginbuttoncon\">\n        <a class=\"errormsgred\" routerLink=\"/signup\">Sign Up </a>\n        <a class=\"errormsgred\" routerLink=\"/forget\">Forgot Password? </a>\n        <button mat-button class=\"orangegradientbutton\">Login</button>\n    </div>\n</form>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/resetpassword/resetpassword.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/resetpassword/resetpassword.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>resetpassword works!</p>\n<form [formGroup]=\"resetpasswordForm\" (ngSubmit)=\"resetsubmit()\" class=\"loginform\">\n    <div class=\"formgroup\">\n\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n            (blur)=\"f.inputBlur(resetpasswordForm,'password')\" />\n        <mat-error\n            *ngIf=\"resetpasswordForm.controls['password']?.touched && resetpasswordForm.controls['password'].errors && resetpasswordForm.controls['password'].errors.required\"\n            class=\"errormsgblue\">Password is required !</mat-error>\n        <mat-error\n            *ngIf=\"resetpasswordForm.controls['password']?.touched && resetpasswordForm.controls['password'].errors && resetpasswordForm.controls['password'].errors.minlength\"\n            class=\"errormsgblue\">Password is too short !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"conpassword\"\n            (blur)=\"f.inputBlur(resetpasswordForm,'conpassword')\" />\n        <mat-error\n            *ngIf=\"resetpasswordForm.controls['conpassword']?.touched && resetpasswordForm.controls['conpassword'].errors && resetpasswordForm.controls['conpassword'].errors.required\"\n            class=\"errormsgblue\">Confirm password is required !</mat-error>\n        <mat-error\n            *ngIf=\"resetpasswordForm.controls['conpassword']?.touched && resetpasswordForm.controls['conpassword'].errors && resetpasswordForm.controls['conpassword'].errors.minlength\"\n            class=\"errormsgblue\">Confirm password is too short !</mat-error>\n        <mat-error *ngIf=\"resetpasswordForm.hasError('mismatchedPasswords')\">Passwords must match</mat-error>\n\n    </div>\n    <div class=\"formgroup loginbuttoncon\">\n\n        <button mat-button class=\"orangegradientbutton\">Reset</button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>signup works!</h2>\n\n<form [formGroup]=\"signForm\" (ngSubmit)=\"signupsubmit()\" class=\"signForm\">\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"FirstName\" formControlName=\"firstname\"\n            (blur)=\"f.inputBlur(signForm,'firstname')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['firstname']?.touched && signForm.controls['firstname'].errors && signForm.controls['firstname'].errors.required\"\n            class=\"errormsgblue\">firstname is required !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"LastName\" formControlName=\"lastname\"\n            (blur)=\"f.inputBlur(signForm,'lastname')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['lastname']?.touched && signForm.controls['lastname'].errors && signForm.controls['lastname'].errors.required\"\n            class=\"errormsgblue\">lastname is required !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\"\n            (blur)=\"f.inputBlur(signForm,'email')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['email']?.touched && signForm.controls['email'].errors && signForm.controls['email'].errors.required\"\n            class=\"errormsgblue\">Email is required !</mat-error>\n        <mat-error\n            *ngIf=\"signForm.controls['email']?.touched && signForm.controls['email'].errors && signForm.controls['email'].errors.pattern\"\n            class=\"errormsgblue\">Please Check Your Email !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"Phone\" formControlName=\"phone\"\n            (blur)=\"f.inputBlur(signForm,'phone')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['phone']?.touched && signForm.controls['phone'].errors && signForm.controls['phone'].errors.required\"\n            class=\"errormsgblue\">phone is required !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n            (blur)=\"f.inputBlur(signForm,'password')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['password']?.touched && signForm.controls['password'].errors && signForm.controls['password'].errors.required\"\n            class=\"errormsgblue\">Password is required !</mat-error>\n        <mat-error\n            *ngIf=\"signForm.controls['password']?.touched && signForm.controls['password'].errors && signForm.controls['password'].errors.minlength\"\n            class=\"errormsgblue\">Password is too short !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"conpassword\"\n            (blur)=\"f.inputBlur(signForm,'password')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['conpassword']?.touched && signForm.controls['conpassword'].errors && signForm.controls['conpassword'].errors.required\"\n            class=\"errormsgblue\">Confirm password is required !</mat-error>\n        <mat-error\n            *ngIf=\"signForm.controls['conpassword']?.touched && signForm.controls['conpassword'].errors && signForm.controls['conpassword'].errors.minlength\"\n            class=\"errormsgblue\">Confirm password is too short !</mat-error>\n        <mat-error *ngIf=\"signForm.hasError('mismatchedPasswords')\">Passwords must match</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"Zip\" formControlName=\"zip\" (blur)=\"f.inputBlur(signForm,'zip')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['zip']?.touched && signForm.controls['zip'].errors && signForm.controls['zip'].errors.required\"\n            class=\"errormsgblue\">Zip is required !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"City\" formControlName=\"city\" (blur)=\"f.inputBlur(signForm,'city')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['city']?.touched && signForm.controls['city'].errors && signForm.controls['city'].errors.required\"\n            class=\"errormsgblue\">City is required !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"State\" formControlName=\"state\"\n            (blur)=\"f.inputBlur(signForm,'state')\" />\n        <mat-error\n            *ngIf=\"signForm.controls['state']?.touched && signForm.controls['state'].errors && signForm.controls['state'].errors.required\"\n            class=\"errormsgblue\">State is required !</mat-error>\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"Company Name\" formControlName=\"companyname\" />\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"Designation in company\" formControlName=\"designation\" />\n\n    </div>\n    <div class=\"formgroup\">\n\n        <input matInput type=\"text\" placeholder=\"Company Website\" formControlName=\"companysite\" />\n\n    </div>\n\n    <div class=\"formgroup loginbuttoncon\">\n\n        <button mat-button class=\"orangegradientbutton\">Sign Up @</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login/login.component */ "./src/app/components/login/login/login.component.ts");
/* harmony import */ var _components_forget_forget_forget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forget/forget/forget.component */ "./src/app/components/forget/forget/forget.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resetpassword/resetpassword.component */ "./src/app/components/resetpassword/resetpassword.component.ts");







var routes = [
    { path: '', component: _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'forget', component: _components_forget_forget_forget_component__WEBPACK_IMPORTED_MODULE_4__["ForgetComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'resetpassword', component: _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Monitize360';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/material-module */ "./src/app/modules/material-module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login/login.component */ "./src/app/components/login/login/login.component.ts");
/* harmony import */ var _components_forget_forget_forget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/forget/forget/forget.component */ "./src/app/components/forget/forget/forget.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api-service */ "./src/app/services/api-service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/resetpassword/resetpassword.component */ "./src/app/components/resetpassword/resetpassword.component.ts");















// authguard import statements here



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_forget_forget_forget_component__WEBPACK_IMPORTED_MODULE_12__["ForgetComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_17__["ResetpasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_8__["TransferHttpCacheModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_10__["NgtUniversalModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"], _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forget/forget/forget.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/forget/forget/forget.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ2V0L2ZvcmdldC9mb3JnZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/forget/forget/forget.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/forget/forget/forget.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service */ "./src/app/services/api-service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");





var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(formBuilder, f, api_service) {
        this.formBuilder = formBuilder;
        this.f = f;
        this.api_service = api_service;
        this.genarateforgotForm();
    }
    ForgetComponent.prototype.ngOnInit = function () {
    };
    ForgetComponent.prototype.genarateforgotForm = function () {
        this.forgotForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
        });
    };
    ForgetComponent.prototype.forgotsubmit = function () {
        if (this.forgotForm.valid) {
            console.log("gorgot hit");
        }
        else {
            for (var x in this.forgotForm.controls) {
                //console.log(this.forgotForm.controls[x]);
                this.forgotForm.controls[x].markAsTouched();
            }
            console.log("eror");
        }
    };
    ForgetComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    ForgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! raw-loader!./forget.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forget/forget/forget.component.html"),
            styles: [__webpack_require__(/*! ./forget.component.css */ "./src/app/components/forget/forget/forget.component.css")]
        })
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/login/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/login/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service */ "./src/app/services/api-service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, api_service, cookieservice, router, f) {
        this.formBuilder = formBuilder;
        this.api_service = api_service;
        this.cookieservice = cookieservice;
        this.router = router;
        this.f = f;
        this.genarateloginForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.genarateloginForm = function () {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    };
    LoginComponent.prototype.loginsubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.api_service.postDatawithoutToken('login', this.loginForm.value).subscribe(function (res) {
                var result;
                result = res;
                // console.log(result);
                if (result.status == "success") {
                    _this.cookieservice.set('userdetails', JSON.stringify(result.item));
                    _this.cookieservice.set('firstname', result.item[0].firstname);
                    _this.cookieservice.set('lastname', result.item[0].lastname);
                    _this.cookieservice.set('id', result.item[0]._id);
                    _this.cookieservice.set('jwttoken', result.token);
                    // just to give it a render on homepage , later things will change
                    _this.router.navigate(['/resetpassword']);
                }
            });
        }
        else {
            this.loginForm.controls['email'].markAsTouched();
            this.loginForm.controls['password'].markAsTouched();
            for (var x in this.loginForm.controls) {
                // console.log(this.loginForm.controls[x]);
                this.loginForm.controls[x].markAsTouched();
            }
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/resetpassword/resetpassword.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/resetpassword/resetpassword.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/resetpassword/resetpassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/resetpassword/resetpassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-service */ "./src/app/services/api-service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");








var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(formBuilder, api_service, cookieservice, router, f) {
        this.formBuilder = formBuilder;
        this.api_service = api_service;
        this.cookieservice = cookieservice;
        this.router = router;
        this.f = f;
        this.genarateresetForm();
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent.prototype.genarateresetForm = function () {
        this.resetpasswordForm = this.formBuilder.group({
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            conpassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["matchingPasswords"])('password', 'conpassword')
        });
    };
    ResetpasswordComponent.prototype.resetsubmit = function () {
        if (this.resetpasswordForm.valid) {
            if (this.resetpasswordForm.value.conpassword != null) {
                delete this.resetpasswordForm.value.conpassword;
            }
            var d = { 'source': 'user', 'data': { 'id': this.cookieservice.get('id'), 'password': this.resetpasswordForm.value.password }, 'token': this.cookieservice.get('jwttoken') };
            //console.log(d);
            this.api_service.postData('addorupdatedata', d).subscribe(function (res) {
                var result;
                result = res;
                console.log(result);
            });
        }
        else {
            for (var x in this.resetpasswordForm.controls) {
                // console.log(this.resetpasswordForm.controls[x]);
                this.resetpasswordForm.controls[x].markAsTouched();
            }
        }
    };
    ResetpasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! raw-loader!./resetpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/components/resetpassword/resetpassword.component.css")]
        })
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-service */ "./src/app/services/api-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, api_service, router, f, cook) {
        this.formBuilder = formBuilder;
        this.api_service = api_service;
        this.router = router;
        this.f = f;
        this.cook = cook;
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NzA3OTA0MjAsImlhdCI6MTU3MDcwNDAyMH0.djwWEc_j6MILbEzjfoT427nmRfll97p57IDp6BtfPSs';
        this.genaratesignForm();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.cook.set('jwttoken', this.token);
    };
    SignupComponent.prototype.genaratesignForm = function () {
        this.signForm = this.formBuilder.group({
            firstname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            conpassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            zip: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyname: [null],
            designation: [null],
            companysite: [null],
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["matchingPasswords"])('password', 'conpassword')
        });
    };
    SignupComponent.prototype.signupsubmit = function () {
        if (this.signForm.valid) {
            if (this.signForm.value.conpassword != null) {
                delete this.signForm.value.conpassword;
            }
            var d = { 'source': 'user', 'data': this.signForm.value };
            this.api_service.postData('addorupdatedata', d).subscribe(function (res) {
                var result;
                result = res;
                console.log(result);
            });
        }
        else {
            for (var x in this.signForm.controls) {
                // console.log(this.signForm.controls[x]);
                this.signForm.controls[x].markAsTouched();
            }
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/modules/material-module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material-module.ts ***!
  \********************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");











































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/services/api-service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api-service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






// import {UploaderComponent} from "./uploader/uploader.component";
var ApiService = /** @class */ (function () {
    function ApiService(_http, _authHttp, cookieService
    // public jwtHelper: JwtHelperService,
    // private loggedinService: LoggedinService
    ) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.loginurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['loginurl'];
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["api_url"];
        this.jwttoken = this.cookieService.get('jwttoken');
    }
    ApiService.prototype.isTokenExpired = function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    ApiService.prototype.getclientip = function () {
        console.log('endpoint');
        // this.isTokenExpired()
        var result = this._http.get("https://ipinfo.io/?format=json&token=9797c42b93078a").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getDatawithouttoken = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        /* console.log('httpOptions');
         console.log(httpOptions);*/
        // this.isTokenExpired()
        var result = this._http.get(this.api_url + endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getJsonObject = function (path) {
        var result = this._http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getEndpoint = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        var condition = endpoint.condition;
        console.log('condition');
        console.log(condition);
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        // this.isTokenExpired()
        var result = this._http.post(this.api_url + endpoint.source, condition, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        console.log(result);
        return result;
    };
    ApiService.prototype.getData = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('id'));
        console.log(this.cookieService.get('id'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        console.log('httpOptions');
        console.log(httpOptions);
        // this.isTokenExpired()
        var result = this._http.post(this.api_url + 'datalist', endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    // getData end
    ApiService.prototype.postData = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                // 'access-token': this.cookieService.get('jwttoken'),
                'Authorization': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.postDatawithoutToken = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.postlogin = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    }; // postData end
    ApiService.prototype.getState = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var result = this._http.get('assets/data/state.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getEndpointUrl = function (endpoint) {
        return this.api_url + endpoint;
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-service */ "./src/app/services/api-service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http, _apiService, cookieService) {
        this.router = router;
        this.http = http;
        this._apiService = _apiService;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('in auth guard');
        console.log(this.cookieService.get('jwttoken'));
        if (this.cookieService.get('jwttoken') == null || this.cookieService.get('jwttoken').length < 10) {
            // alert(78);
            this.router.navigate(['/']);
        }
        else
            return true;
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.inputBlur = function (frm, val) {
        frm.controls[val].markAsUntouched();
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_4__["AppBrowserModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\sourav\Monitize360\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map