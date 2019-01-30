import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {AccordionComponent} from './accordion/accordion.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AccordionComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define('aaw-accordion', createCustomElement(AccordionComponent, {injector: this.injector}));
  }
}
