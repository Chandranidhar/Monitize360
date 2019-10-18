/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-cookie-service";
export class ApiService {
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwttoken');
        // public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgzNTgyMTAsImlhdCI6MTU2ODI3MTgxMH0.2ltvxVKwfX1uwMOwQ2Zzgp1K2jiaCDj051Wyho0Iw-Q';
        this.fileservername = [];
        this.subjectForServerUrl = new Subject();
        this.subjectForaddEndpointUrl = new Subject();
        this.subjectForuploadEndpointUrl = new Subject(); //added by souresh
        //added by souresh
        this.subjectForupdateEndpointUrl = new Subject();
        this.subjectFordeletesingleEndpointUrl = new Subject();
        this.subjectForupdatestatusSingleEndpointUrl = new Subject();
        this.subjectForGetdataEndpointUrl = new Subject();
        this.subscriptionServer = this.getServerUrl().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.serverUrl = result;
            }
            else {
                this.serverUrl = null;
            }
        }));
        this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.addendpointUrl = result;
            }
            else {
                this.addendpointUrl = null;
            }
        }));
        /*********added by souresh***********/
        this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.uploadEndpointUrl = result;
            }
            else {
                this.uploadEndpointUrl = null;
            }
        }));
        /************souresh end here**************/
        this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.updateendpointUrl = result;
            }
            else {
                this.updateendpointUrl = null;
            }
        }));
        this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.deletesingle_endpointUrl = result;
            }
            else {
                this.deletesingle_endpointUrl = null;
            }
        }));
        this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.updatestatus_single_endpointUrl = result;
            }
            else {
                this.updatestatus_single_endpointUrl = null;
            }
        }));
        this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => {
            /** @type {?} */
            let result;
            result = message;
            if (result != null) {
                this.getdata_endpointUrl = result;
            }
            else {
                this.getdata_endpointUrl = null;
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setServerUrl(value) {
        this.subjectForServerUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearServerUrl() {
        this.subjectForServerUrl.next(null);
    }
    /**
     * @return {?}
     */
    getServerUrl() {
        return this.subjectForServerUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setaddEndpoint(value) {
        this.subjectForaddEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearaddEndpoint() {
        this.subjectForaddEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getaddEndpoint() {
        return this.subjectForaddEndpointUrl.asObservable();
    }
    /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    setuploadEndpont(value) {
        this.subjectForuploadEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearuploadEndpoint() {
        this.subjectForuploadEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getuploadEndpoint() {
        return this.subjectForuploadEndpointUrl.asObservable();
    }
    /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    setupdateEndpoint(value) {
        this.subjectForupdateEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearupdateEndpoint() {
        this.subjectForupdateEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getupdateEndpoint() {
        return this.subjectForupdateEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setdeletesingleEndpoint(value) {
        this.subjectFordeletesingleEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    cleardeletesingleEndpoint() {
        this.subjectFordeletesingleEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getdeletesingleEndpoint() {
        return this.subjectFordeletesingleEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setupdatestatus_singleEndpoint(value) {
        this.subjectForupdatestatusSingleEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    clearupdatestatus_singleEndpoint() {
        this.subjectForupdatestatusSingleEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getupdatestatus_singleEndpoint() {
        return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setgetdataEndpoint(value) {
        this.subjectForGetdataEndpointUrl.next(value);
    }
    /**
     * @return {?}
     */
    cleargetdataEndpoint() {
        this.subjectForGetdataEndpointUrl.next(null);
    }
    /**
     * @return {?}
     */
    getdataEndpoint() {
        return this.subjectForGetdataEndpointUrl.asObservable();
    }
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    addData(requestdata) {
        console.log('in adddata apiservice');
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written access-token(temp)
            })
        };
        console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    uploadFile(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    UpdateData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken //hard code written access-token(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    getData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    addLogin(requestdata) {
        console.log('in addLogin apiservice');
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        console.log(this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    forgetPassword(requestdata) {
        console.log('in forgetPassword apiservice');
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written access-token(temp)
            })
        };
        console.log(this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    deleteSingleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    deleteMultipleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForSingleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForMultipleData(requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    CustomRequest(requestdata, endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'access-token': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getToken(endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
/** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ApiService.prototype.lengthis;
    /** @type {?} */
    ApiService.prototype.percentageis;
    /** @type {?} */
    ApiService.prototype.inprogress;
    /** @type {?} */
    ApiService.prototype.progress;
    /** @type {?} */
    ApiService.prototype.uploadtype;
    /** @type {?} */
    ApiService.prototype.uploaderror;
    /** @type {?} */
    ApiService.prototype.accesstoken;
    /** @type {?} */
    ApiService.prototype.fileservername;
    /** @type {?} */
    ApiService.prototype.serverUrl;
    /** @type {?} */
    ApiService.prototype.addendpointUrl;
    /** @type {?} */
    ApiService.prototype.uploadEndpointUrl;
    /** @type {?} */
    ApiService.prototype.updateendpointUrl;
    /** @type {?} */
    ApiService.prototype.deletesingle_endpointUrl;
    /** @type {?} */
    ApiService.prototype.updatestatus_single_endpointUrl;
    /** @type {?} */
    ApiService.prototype.deletemultiple_endpointUrl;
    /** @type {?} */
    ApiService.prototype.updatestatus_multiple_endpointUrl;
    /** @type {?} */
    ApiService.prototype.getdata_endpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForServerUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForaddEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForuploadEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForupdateEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectFordeletesingleEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForupdatestatusSingleEndpointUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.subjectForGetdataEndpointUrl;
    /** @type {?} */
    ApiService.prototype.subscriptionServer;
    /** @type {?} */
    ApiService.prototype.subscriptionaddEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionuploadEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionupdateEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptiondeletesingleEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionupdatestatusSingleEndpoint;
    /** @type {?} */
    ApiService.prototype.subscriptionGetdataEndpoint;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._authHttp;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE0QixVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxHQUFHLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUvRCxPQUFPLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFNLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFNaEQsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQW1DckIsWUFBb0IsS0FBaUIsRUFDM0IsU0FBcUIsRUFBUyxhQUE0QjtRQURoRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CN0QsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUUxRCxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQVVqQix3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3pDLDZCQUF3QixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDOUMsZ0NBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQyxDQUFFLGtCQUFrQjs7UUFDckUsZ0NBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNqRCxzQ0FBaUMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3ZELDRDQUF1QyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDN0QsaUNBQTRCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVd4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTs7Z0JBQzdELE1BQVc7WUFDZCxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ2pCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFOztnQkFDbkUsTUFBVztZQUNmLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDakIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUM1QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQywwQkFBMEIsR0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFBLEVBQUU7O2dCQUN0RSxNQUFVO1lBQ2QsTUFBTSxHQUFDLE9BQU8sQ0FBQztZQUNiLElBQUcsTUFBTSxJQUFFLElBQUksRUFBQztnQkFDZCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO2FBQ2pDO2lCQUFLO2dCQUNKLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7YUFDL0I7UUFDTCxDQUFDLEVBQUMsQ0FBQTtRQUNGLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFOztnQkFDekUsTUFBVztZQUNmLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDakIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7O2dCQUNyRixNQUFXO1lBQ2YsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUNqQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNDQUFzQyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTs7Z0JBQ2xHLE1BQVc7WUFDZixNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ2pCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsK0JBQStCLEdBQUcsSUFBSSxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTs7Z0JBQ3hFLE1BQVc7WUFDZixNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ2pCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFHTCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFDLEtBQVM7UUFDeEIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFJRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxLQUFVO1FBQ2hDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDTSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCw4QkFBOEIsQ0FBQyxLQUFVO1FBQ3ZDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNNLGdDQUFnQztRQUNyQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDTSw4QkFBOEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsdUNBQXVDLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDTSxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7SUFJRCxjQUFjO1FBRVoseUNBQXlDO1FBQ3pDLDZFQUE2RTtRQUM3RSxrRkFBa0Y7UUFDbEYscUVBQXFFO1FBQ3JFLDhGQUE4RjtRQUM5RixzREFBc0Q7UUFDdEQsZ0VBQWdFO0lBQ2xFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFdBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Y0FDL0IsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQVUsc0NBQXNDO2FBQ2xGLENBQUM7U0FDSDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDOztZQUNoRSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQ2xJLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUdELFVBQVUsQ0FBQyxXQUFlOztjQUNsQixXQUFXLEdBQUM7WUFDZCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBQyxrQkFBa0I7Z0JBQ2pDLGNBQWMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFVLHNDQUFzQzthQUNoRixDQUFDO1NBQ0w7O1lBQ0csTUFBTSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUEsRUFBRSxDQUFBLEdBQUcsRUFBQyxDQUFDO1FBQy9ILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxXQUFnQjs7Y0FDbkIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQVUsc0NBQXNDO2FBQ2pGLENBQUM7U0FDSDs7WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7UUFDckksT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsV0FBZ0I7O2NBQ2hCLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVzthQUNsQyxDQUFDO1NBQ0g7O1lBQ0csTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQ3ZJLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxXQUFnQjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O2NBQ2hDLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFFbkMsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUNwQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQ2xJLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFJSCxjQUFjLENBQUMsV0FBZ0I7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOztjQUN0QyxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxvRkFBb0Y7YUFDckYsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUNwQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQ2xJLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUlDLGdCQUFnQixDQUFDLFdBQWdCOztjQUN6QixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDakMsQ0FBQztTQUNIOztZQUNHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUM1SSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFdBQWdCOztjQUMzQixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDakMsQ0FBQztTQUNIOztZQUNHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7UUFDbkosT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxXQUFnQjs7Y0FDbEMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ2pDLENBQUM7U0FDSDs7WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7UUFDbkosT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCwyQkFBMkIsQ0FBQyxXQUFnQjs7Y0FDcEMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ2pDLENBQUM7U0FDSDs7WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsK0JBQStCLEdBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQzFKLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUNELGFBQWEsQ0FBQyxXQUFnQixFQUFFLFFBQVk7O2NBQ3BDLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVzthQUNqQyxDQUFDO1NBQ0g7O1lBQ0csTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQ3RILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFFBQVk7O2NBQ2IsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0g7O1lBQ0csTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUN6RixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFoVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsVUFBVTtZQUFWLFVBQVU7WUFHWixhQUFhOzs7OztJQVFsQiw4QkFBZ0I7O0lBQ2hCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOztJQUNsQiw4QkFBMEI7O0lBQzFCLGdDQUFrQjs7SUFDbEIsaUNBQTZCOztJQUM3QixpQ0FBMEQ7O0lBRTFELG9DQUF5Qjs7SUFDekIsK0JBQWU7O0lBQ2Ysb0NBQW9COztJQUNwQix1Q0FBc0I7O0lBQ3RCLHVDQUF1Qjs7SUFDdkIsOENBQThCOztJQUM5QixxREFBcUM7O0lBQ3JDLGdEQUFnQzs7SUFDaEMsdURBQXVDOztJQUN2Qyx5Q0FBeUI7Ozs7O0lBQ3pCLHlDQUFpRDs7Ozs7SUFDakQsOENBQXNEOzs7OztJQUN0RCxpREFBeUQ7Ozs7O0lBQ3pELGlEQUF5RDs7Ozs7SUFDekQsdURBQStEOzs7OztJQUMvRCw2REFBcUU7Ozs7O0lBQ3JFLGtEQUEwRDs7SUFDMUQsd0NBQXdDOztJQUN4Qyw2Q0FBNkM7O0lBQzdDLGdEQUFnRDs7SUFDaEQsZ0RBQWdEOztJQUNoRCxzREFBc0Q7O0lBQ3RELDREQUE0RDs7SUFDNUQsaURBQWlEOzs7OztJQUVyQywyQkFBeUI7Ozs7O0lBQ25DLCtCQUE2Qjs7Ozs7SUFBQyxtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbi8vIGZvciBzZXR0aW5nIG9ic2VydmFibGVzIHRvIGdldCBzZXJ2ZXJ1cmwgYW5kIGVuZHBvaW50dXJsIGZyb20gYXBwXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnR7Q29va2llU2VydmljZX0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7ICAgXHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGxlbmd0aGlzO1xyXG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XHJcbiAgcHVibGljIGlucHJvZ3Jlc3M7XHJcbiAgcHVibGljIHByb2dyZXNzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgdXBsb2FkdHlwZTtcclxuICBwdWJsaWMgdXBsb2FkZXJyb3I6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBhY2Nlc3N0b2tlbjphbnk9dGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0dG9rZW4nKTtcclxuICAvLyBwdWJsaWMgYWNjZXNzdG9rZW46YW55PSdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbWIyOGlPaUppWVhJaUxDSmxlSEFpT2pFMU5qZ3pOVGd5TVRBc0ltbGhkQ0k2TVRVMk9ESTNNVGd4TUgwLjJsdHZ4Vkt3ZlgxdXdNT3dRMlp6Z3AxSzJqaWFDRGowNTFXeWhvMEl3LVEnO1xyXG4gIGZpbGVzZXJ2ZXJuYW1lOiBhbnkgPSBbXTtcclxuICBzZXJ2ZXJVcmw6IGFueTtcclxuICBhZGRlbmRwb2ludFVybDogYW55O1xyXG4gIHVwbG9hZEVuZHBvaW50VXJsOmFueTsgLy9zb3VyZXNoXHJcbiAgdXBkYXRlZW5kcG9pbnRVcmw6IGFueTtcclxuICBkZWxldGVzaW5nbGVfZW5kcG9pbnRVcmw6IGFueTtcclxuICB1cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgZGVsZXRlbXVsdGlwbGVfZW5kcG9pbnRVcmw6IGFueTtcclxuICB1cGRhdGVzdGF0dXNfbXVsdGlwbGVfZW5kcG9pbnRVcmw6IGFueTtcclxuICBnZXRkYXRhX2VuZHBvaW50VXJsOiBhbnk7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yU2VydmVyVXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgc3ViamVjdEZvcmFkZEVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgc3ViamVjdEZvcnVwbG9hZEVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpOyAgLy9hZGRlZCBieSBzb3VyZXNoXHJcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9ydXBkYXRlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yZGVsZXRlc2luZ2xlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBzdWJzY3JpcHRpb25TZXJ2ZXI6IFN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uYWRkRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9udXBsb2FkRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjsgICAvL2FkZGVkIGJ5IHNvdXJlc2hcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9udXBkYXRlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uZGVsZXRlc2luZ2xlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9udXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uR2V0ZGF0YUVuZHBvaW50OiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIF9hdXRoSHR0cDogSHR0cENsaWVudCxwcml2YXRlIGNvb2tpZVNlcnZpY2UgOkNvb2tpZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VydmVyID0gdGhpcy5nZXRTZXJ2ZXJVcmwoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlcnZlclVybCA9IHJlc3VsdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlcnZlclVybCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25hZGRFbmRwb2ludCA9IHRoaXMuZ2V0YWRkRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5hZGRlbmRwb2ludFVybCA9IHJlc3VsdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFkZGVuZHBvaW50VXJsID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvKioqKioqKioqYWRkZWQgYnkgc291cmVzaCoqKioqKioqKioqL1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb251cGxvYWRFbmRwb2ludD10aGlzLmdldHVwbG9hZEVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2U9PntcclxuICAgICAgbGV0IHJlc3VsdDphbnk7XHJcbiAgICAgIHJlc3VsdD1tZXNzYWdlO1xyXG4gICAgICAgIGlmKHJlc3VsdCE9bnVsbCl7XHJcbiAgICAgICAgICB0aGlzLnVwbG9hZEVuZHBvaW50VXJsID0gcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMudXBsb2FkRW5kcG9pbnRVcmwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKioqKioqKioqKioqc291cmVzaCBlbmQgaGVyZSoqKioqKioqKioqKioqL1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb251cGRhdGVFbmRwb2ludCA9IHRoaXMuZ2V0dXBkYXRlRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVlbmRwb2ludFVybCA9IHJlc3VsdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZWVuZHBvaW50VXJsID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbmRlbGV0ZXNpbmdsZUVuZHBvaW50ID0gdGhpcy5nZXRkZWxldGVzaW5nbGVFbmRwb2ludCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcclxuICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICByZXN1bHQgPSBtZXNzYWdlO1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCA9IHJlc3VsdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb251cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludCA9IHRoaXMuZ2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgIHJlc3VsdCA9IG1lc3NhZ2U7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlc3RhdHVzX3NpbmdsZV9lbmRwb2ludFVybCA9IHJlc3VsdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uR2V0ZGF0YUVuZHBvaW50ID0gdGhpcy5nZXRkYXRhRW5kcG9pbnQoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgcmVzdWx0ID0gbWVzc2FnZTtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5nZXRkYXRhX2VuZHBvaW50VXJsID0gcmVzdWx0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2V0ZGF0YV9lbmRwb2ludFVybCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc2V0U2VydmVyVXJsKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc3ViamVjdEZvclNlcnZlclVybC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGNsZWFyU2VydmVyVXJsKCkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9yU2VydmVyVXJsLm5leHQobnVsbCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRTZXJ2ZXJVcmwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JTZXJ2ZXJVcmwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRhZGRFbmRwb2ludCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3JhZGRFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGNsZWFyYWRkRW5kcG9pbnQoKSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3JhZGRFbmRwb2ludFVybC5uZXh0KG51bGwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0YWRkRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3JhZGRFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbi8qKioqKmFkZGVkIGJ5IHNvdXJlc2gqKioqKiovXHJcbiAgc2V0dXBsb2FkRW5kcG9udCh2YWx1ZTphbnkpe1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjbGVhcnVwbG9hZEVuZHBvaW50KCl7XHJcbiAgICB0aGlzLnN1YmplY3RGb3J1cGxvYWRFbmRwb2ludFVybC5uZXh0KG51bGwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0dXBsb2FkRW5kcG9pbnQoKTogT2JzZXJ2YWJsZSA8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBsb2FkRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG4gICAvKioqKioqKipzb3VyZXNoIGVuZCBoZXJlKioqKioqKiovXHJcblxyXG5cclxuICBzZXR1cGRhdGVFbmRwb2ludCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGNsZWFydXBkYXRlRW5kcG9pbnQoKSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0dXBkYXRlRW5kcG9pbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3RGb3J1cGRhdGVFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldGRlbGV0ZXNpbmdsZUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgY2xlYXJkZWxldGVzaW5nbGVFbmRwb2ludCgpIHtcclxuICAgIHRoaXMuc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsLm5leHQobnVsbCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRkZWxldGVzaW5nbGVFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvcmRlbGV0ZXNpbmdsZUVuZHBvaW50VXJsLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc3ViamVjdEZvcnVwZGF0ZXN0YXR1c1NpbmdsZUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgY2xlYXJ1cGRhdGVzdGF0dXNfc2luZ2xlRW5kcG9pbnQoKSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3J1cGRhdGVzdGF0dXNTaW5nbGVFbmRwb2ludFVybC5uZXh0KG51bGwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0dXBkYXRlc3RhdHVzX3NpbmdsZUVuZHBvaW50KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0Rm9ydXBkYXRlc3RhdHVzU2luZ2xlRW5kcG9pbnRVcmwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRnZXRkYXRhRW5kcG9pbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zdWJqZWN0Rm9yR2V0ZGF0YUVuZHBvaW50VXJsLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgY2xlYXJnZXRkYXRhRW5kcG9pbnQoKSB7XHJcbiAgICB0aGlzLnN1YmplY3RGb3JHZXRkYXRhRW5kcG9pbnRVcmwubmV4dChudWxsKTtcclxuICB9XHJcbiAgcHVibGljIGdldGRhdGFFbmRwb2ludCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdEZvckdldGRhdGFFbmRwb2ludFVybC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaXNUb2tlbkV4cGlyZWQoKSB7XHJcblxyXG4gICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcclxuICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XHJcbiAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcclxuICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxyXG4gIH1cclxuXHJcbiAgYWRkRGF0YShyZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnaW4gYWRkZGF0YSBhcGlzZXJ2aWNlJyk7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIGFjY2Vzcy10b2tlbih0ZW1wKVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaHR0cG9wdGlvbnMnLGh0dHBPcHRpb25zLCB0aGlzLnNlcnZlclVybCwgcmVxdWVzdGRhdGEpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHRoaXMuYWRkZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIC8qKioqKioqYWRkZWQgYnkgc291cmVzaCoqKioqKioqKioqKi9cclxuICBcclxuICB1cGxvYWRGaWxlKHJlcXVlc3RkYXRhOmFueSl7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucz17XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdhY2Nlc3MtdG9rZW4nOnRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBhY2Nlc3MtdG9rZW4odGVtcClcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQ9dGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGxvYWRFbmRwb2ludFVybCxKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcz0+cmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICAvKioqKioqKnNvdXJlc2ggZW5kIGhlcmUqKioqKioqKi9cclxuICBVcGRhdGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRoaXMuYWNjZXNzdG9rZW4gICAgICAgICAgLy9oYXJkIGNvZGUgd3JpdHRlbiBhY2Nlc3MtdG9rZW4odGVtcClcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldERhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5nZXRkYXRhX2VuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuLyoqKioqKioqKioqKioqKiBBZGRlZCBieSBoaW1hZHJpIHN0YXJ0IGhlcmUgKioqKioqKioqKioqKioqLyBcclxuICBhZGRMb2dpbihyZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnaW4gYWRkTG9naW4gYXBpc2VydmljZScpO1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAvLydBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlbiAgICAgICAgICAvL2hhcmQgY29kZSB3cml0dGVuIGFjY2Vzcy10b2tlbih0ZW1wKVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybCxyZXF1ZXN0ZGF0YSk7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5hZGRlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKiBBZGRlZCBieSBoaW1hZHJpIGVuZCBoZXJlICoqKioqKioqKioqKioqKi8gXHJcblxyXG4vKioqKioqKioqKioqKioqIEFkZGVkIGJ5IGhpbWFkcmkgc3RhcnQgaGVyZSAqKioqKioqKioqKioqKiovIFxyXG5mb3JnZXRQYXNzd29yZChyZXF1ZXN0ZGF0YTogYW55KSB7XHJcbiAgY29uc29sZS5sb2coJ2luIGZvcmdldFBhc3N3b3JkIGFwaXNlcnZpY2UnKTtcclxuICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgLy8gJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuICAgICAgICAgIC8vaGFyZCBjb2RlIHdyaXR0ZW4gYWNjZXNzLXRva2VuKHRlbXApXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsLHJlcXVlc3RkYXRhKTtcclxuICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5hZGRlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuLyoqKioqKioqKioqKioqKiBBZGRlZCBieSBoaW1hZHJpIGVuZCBoZXJlICoqKioqKioqKioqKioqKi8gXHJcblxyXG5cclxuICBkZWxldGVTaW5nbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy5kZWxldGVzaW5nbGVfZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBkZWxldGVNdWx0aXBsZURhdGEocmVxdWVzdGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYWNjZXNzLXRva2VuJzogdGhpcy5hY2Nlc3N0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB0aGlzLmRlbGV0ZXNpbmdsZV9lbmRwb2ludFVybCsnbWFueScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGVTdGF0dXNGb3JTaW5nbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlU3RhdHVzRm9yTXVsdGlwbGVEYXRhKHJlcXVlc3RkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRoaXMuYWNjZXNzdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgdGhpcy51cGRhdGVzdGF0dXNfc2luZ2xlX2VuZHBvaW50VXJsKydtYW55JywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgQ3VzdG9tUmVxdWVzdChyZXF1ZXN0ZGF0YTogYW55LCBlbmRwb2ludDphbnkgKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0aGlzLmFjY2Vzc3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbihlbmRwb2ludDphbnkgKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArZW5kcG9pbnQsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==