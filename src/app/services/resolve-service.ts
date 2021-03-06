/*
 export class Resolve {
 }
 */
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api-service';
import { CookieService } from 'ngx-cookie-service';

export interface EndpointComponent {
    endpoint: string;
}

@Injectable()
export class Resolveservice implements Resolve<EndpointComponent> {

    constructor(public _apiService: ApiService, public router: Router, public cookieService: CookieService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        //console.log('resolve data');
        let endpoint: any = route.data;
        let condition: any = {};
        console.log(endpoint.condition);
        if (endpoint.condition != '_id' && endpoint.condition != null) {
            for (let i in endpoint.condition) {
                if (i == '_id') {
                    endpoint.condition[i] = route.params.id;
                    console.log('route.params.id');
                    console.log(route.params.id);
                }
            }
        }

        // return new Promise((resolve) => {

        //         console.log('route.data --  in resolve ');
        //         console.log(route.data);
        //         console.log(route.params);
        //         if(route.data.condition!=null && route.data.condition.myid !=null && route.data.condition.myid=='id')
        //             route.data.condition._id=this.cookieService.get('user_id');
        //         this._apiService.getEndpoint(route.data).subscribe(api_object => {
        //             console.log('api_object  !!!!');
        //             console.log(api_object);
        //             if (api_object) {
        //                 return resolve(api_object);
        //             } else { // id not found
        //                 this.router.navigateByUrl('login');
        //                 return true;
        //             }
        //         });

        // });


        return new Promise((resolve) => {
            let userdetails = this.cookieService.get('user_details');
            let cookie: any;
            cookie = JSON.parse(userdetails);
            console.log("Resoleve Data ID    " + cookie._id);


            console.log('route.data --  in resolve ');
            let data: any = {};
            data = route.data;
            console.log(data.condition);
            console.log(data.condition);
            console.log(route.params);
            if (route.data.condition != null && route.data.condition.myid != null && route.data.condition.myid == 'id') {
                console.log('route.data');
                // route.data.condition={_id:cookie._id};
                data.condition = ( { _id: cookie._id });
                
            }
            if (route.data.condition != null && route.data.condition.user_id_object != null && route.data.condition.user_id_object == 'user_id_object') {
                // console.log('route.data ++++++++++++++');
                route.data.condition.user_id_object=cookie._id;
                // route.data.condition = Object.assign({}, { user_id_object: cookie._id });
                // console.log(route.data);
            }

            // return;
            this._apiService.getData(route.data).subscribe(api_object => {
                console.log('api_object  !!!!');
                console.log(api_object);
                if (api_object) {
                    return resolve(api_object);
                } else { // id not found
                    this.router.navigateByUrl('login');
                    return true;
                }
            });

        });
    }
}
