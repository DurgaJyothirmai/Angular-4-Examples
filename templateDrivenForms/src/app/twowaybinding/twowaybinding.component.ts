import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  fname = "John";
  constructor() { }

  ngOnInit() {
  }

  submitDetails(data) {
    console.log(data);
  }

}
