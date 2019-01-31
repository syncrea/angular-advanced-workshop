import {NgModule} from '@angular/core';
import {MicroApp2Component} from './micro-app2.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MicroApp2Component],
  imports: [
    CommonModule
  ],
  entryComponents: [
    MicroApp2Component
  ],
  exports: [MicroApp2Component]
})
export class MicroApp2Module {
  static entry = MicroApp2Component;
}
