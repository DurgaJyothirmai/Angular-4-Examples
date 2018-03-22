import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {myFirstDirective} from '../customDirectives/hoverDirective';
import {hostExample} from '../customDirectives/hostListenerExample';

@NgModule({
  declarations: [
    AppComponent,
    myFirstDirective,
    hostExample
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
