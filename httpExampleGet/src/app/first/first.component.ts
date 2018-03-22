import { Component, OnInit } from '@angular/core';
import {MapExampleService} from '../map-example.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [MapExampleService]
})
export class FirstComponent implements OnInit {

  display; any;
  constructor(public example:MapExampleService) { }

  ngOnInit() {
   return this.example.getRecords().subscribe(data => this.display = data);
  }

}
