import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title =  "Welcome to Angular 4";

   /*Array Example*/
   Names = ["Ravi","Suresh","Sarika","Lakshmi"];

   /*Array of Objects Example */

   personalInfo = [
     {
       name: 'Ramesh',
       company: 'TCS',
       experience : '2 years',
       city: 'Delhi'
     },
     {
      name: 'Suresh',
      company: 'TCS',
      experience : '6 years',
      city: 'Chennai'
     },
     {
      name: 'Priyanka',
      company: 'Infosys',
      experience : '10 years',
      city: 'Hyderabad'
     },
     {
      name: 'Pinky',
      company: 'Wipro',
      experience : '4 years',
      city: 'Hyderabad'
     }
  ]
}
