import { Component } from '@angular/core';
import {FirstServiceService} from './first-service.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FirstServiceService]
})
export class AppComponent implements OnInit{
  employeeRecords: any;
  constructor(public serviceExample: FirstServiceService) {

  }

  ngOnInit() {
    this.employeeRecords = this.serviceExample.getEmployeeInformation();
    console.log(this.employeeRecords);
  }
}
