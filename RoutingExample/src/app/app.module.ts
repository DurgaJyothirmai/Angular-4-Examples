import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstrouteComponent } from './firstroute/firstroute.component';
import { SecondrouteComponent } from './secondroute/secondroute.component';
import { ThirdrouteComponent } from './thirdroute/thirdroute.component';
import { FourthrouteComponent } from './fourthroute/fourthroute.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FirstrouteComponent,
    SecondrouteComponent,
    ThirdrouteComponent,
    FourthrouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {'path':'','component': FirstrouteComponent},
      {'path':'Home','component': FirstrouteComponent},
      {'path':'Product','component': SecondrouteComponent},
      {'path':'Sitemap','component': ThirdrouteComponent},
      {'path':'Service','component': FourthrouteComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
