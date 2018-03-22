import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /*ViewChild decorator is used to access all variables,methods which r available in child component */
  @ViewChild(ChildComponent) _child: ChildComponent;

  getData() {
    this._child.title = "Data from Parent component";
  }
}
