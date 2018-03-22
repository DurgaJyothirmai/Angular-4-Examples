import { Component } from '@angular/core';
import {HeaderService} from '../app/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderService]
})
export class AppComponent {
  recordInformation: any;
  constructor(public serv:HeaderService) {

  }
  ngOnInit() {
    return this.serv.getPersonalRecords().subscribe(
      data=> this.recordInformation = data,
      err => console.log("Error"),
      () =>console.log("Completed")
     )
  }
}
