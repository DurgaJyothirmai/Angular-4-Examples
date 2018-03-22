import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  title: string;
  /*to pass data from child to parent*/
  @Output() details:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }

  getStatement() {
    console.log("Button Clicked");
    this.title="Event Binding";
    this.details.emit(this.title);
  }

}
