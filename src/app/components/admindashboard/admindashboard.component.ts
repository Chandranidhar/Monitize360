import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
 

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute,public router : Router) { 

  }

  ngOnInit() {
 
  }



}
