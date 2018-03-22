import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  @Input() empDetails : any;

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.empDetails);
  }

}
