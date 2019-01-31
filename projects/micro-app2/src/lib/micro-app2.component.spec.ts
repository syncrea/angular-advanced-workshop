import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroApp2Component } from './micro-app2.component';

describe('MicroApp2Component', () => {
  let component: MicroApp2Component;
  let fixture: ComponentFixture<MicroApp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroApp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
