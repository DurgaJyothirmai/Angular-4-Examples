import { Component } from '@angular/core';
import {HttpCallService} from './http-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpCallService]
})
export class AppComponent {
  customerInfo: any;
  constructor(public service: HttpCallService) {}

  ngOnInit() {
    return this.service.getCustomerDetails().subscribe(data => this.customerInfo = data);
  }
}
