// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ApiService } from '../services/api-service';
// import { CookieService } from 'ngx-cookie-service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private router: Router,
//                 public http: HttpClient,
//                 private _apiService: ApiService,
//                 private cookieService: CookieService
//     ) {}


//     canActivate() {
//         if (this.cookieService.get('jwttoken') == null || this.cookieService.get('jwttoken').length < 10) {
//             this.router.navigate(['/']);
//         } else return true;
//         return false;
//     }
// }



import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api-service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public cookieService: CookieService, private _router: Router) {}


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        var authToken: any = this.cookieService.get('jwttoken');

        if(authToken) {
            var userdetails: any = JSON.parse(this.cookieService.get('user_details'));

            switch(next.url[0].path) {
                case 'login':
                case 'forget':
                case 'sign-up':
                case 'resetpassword':
                    if(userdetails.type == "user") {
                        this._router.navigate(['/user-dashboard']);
                    } else {
                        this._router.navigate(['/admin-dashboard']);
                    }
                    break;
                default:
                    return true;
            }
        } else {
            switch(next.url[0].path) {
                case 'login':
                case 'forget':
                case 'sign-up':
                case 'resetpassword':
                    return true;
                    break;
                default:
                    this._router.navigate(['login']);
            }
        }
    }
}
