import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  open = false;
  @Input() headerTitle: string;

  toggle(open?: boolean) {
    this.open = open !== undefined ? open : !this.open;
  }
}
