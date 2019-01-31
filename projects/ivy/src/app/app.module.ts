import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AccordionComponent} from './accordion/accordion.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
