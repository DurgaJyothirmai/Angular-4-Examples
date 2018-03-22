import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FirstComponent implements OnInit {
//ViewEncapsulation.Native will consider css classes declared in this component only,it wil not invoke outside css(same class)
  constructor() { }

  ngOnInit() {
  }

}
