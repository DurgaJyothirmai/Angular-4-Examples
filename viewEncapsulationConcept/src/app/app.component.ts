import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  //ViewEncapsulation.Emulated is the default angular encapsulation 
  //if same class is used in both component and globally,css style for component wil be considered
  title = 'app';
}
