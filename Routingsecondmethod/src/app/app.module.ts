import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routerConfig } from './app.route';
import { Route4Component } from './route4/route4.component';
import { Route5Component } from './route5/route5.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    PageNotFoundComponent,
    Route4Component,
    Route5Component
  ],
  imports: [
    BrowserModule,
    routerConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
