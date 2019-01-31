import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation, ɵmarkDirty as markDirty} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  open = false;
  @Input() headerTitle: string;

  toggle(open?: boolean) {
    this.open = open !== undefined ? open : !this.open;
    markDirty(this);
  }
}
