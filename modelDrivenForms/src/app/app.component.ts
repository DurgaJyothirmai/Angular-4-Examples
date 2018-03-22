import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userFormDetails = new FormGroup(
    {
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),
      'contact': new FormControl(),
      'postalcode': new FormControl()
    }
  )

  submitDetails() {
    console.log(this.userFormDetails.value);
  }
}
