import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    InputDecoratorComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
