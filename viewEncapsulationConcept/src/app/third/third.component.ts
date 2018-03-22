import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThirdComponent implements OnInit {
//ViewEncapsulation.None wil inherit classes frm native/none.It wil not inherit from emulated
//Need more practice to understand this concept
  constructor() { }

  ngOnInit() {
  }

}
