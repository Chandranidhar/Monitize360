import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) {
    // this.serverURL = apiService.api_url;
   }

  ngOnInit() {
  }

}
