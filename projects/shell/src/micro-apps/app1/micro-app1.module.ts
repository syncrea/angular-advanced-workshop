import {NgModule} from '@angular/core';
import {MicroApp1Component} from './micro-app1.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MicroApp1Component],
  imports: [
    CommonModule
  ],
  entryComponents: [
    MicroApp1Component
  ],
  exports: [MicroApp1Component]
})
export class MicroApp1Module {
  static entry = MicroApp1Component;
}
