import { Component } from '@angular/core';
import {PostexampleService} from './postexample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PostexampleService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileDetails = {
    name: '',
    job: '',
    id:'',
    createdAt: ''
  }
  constructor(private postExample: PostexampleService) {

  }

  public getDetails() {
    this.postExample.getProfile().subscribe(res => this.profileDetails = res);
  }
}
