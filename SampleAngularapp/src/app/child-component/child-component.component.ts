import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  /*Object*/

  Details = {
    city: 'Guntur',
    state: 'Andhrapradesh'
  };

Caption: any;

  employeeInformation = [
    {
      'id': '101',
      'gender':'male',
      'salary':'10000'
    },
    {
      'id': '104',
      'gender':'male',
      'salary':'100000'
    },
    {
      'id': '121',
      'gender':'female',
      'salary':'10800'
    },
    {
      'id': '131',
      'gender':'female',
      'salary':'19000'
    }
  ]
  constructor() { }

  ngOnInit() {
  
  }

  displaydata(id) {
    this.Caption = id;
  }
}
