import { Injectable } from '@angular/core';

@Injectable()
export class FirstServiceService {

  constructor() { }

  emprecords = [
    {
      'name': 'Priya',
      'empId': '1012',
      'exp': '2 Years',
      'city': 'Delhi'
    },
    {
      'name': 'Bunty',
      'empId': '1112',
      'exp': '5 Years',
      'city': 'Chennai'
    },
    {
      'name': 'Gautam',
      'empId': '1936',
      'exp': '2 Years',
      'city': 'Hyderabad'
    },
    {
      'name': 'Shabbir',
      'empId': '1636',
      'exp': '1 Year',
      'city': 'Kochi'
    }
  ]

  getEmployeeInformation() {
    return this.emprecords;
  }
}
