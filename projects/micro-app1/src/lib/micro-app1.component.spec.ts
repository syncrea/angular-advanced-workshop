import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroApp1Component } from './micro-app1.component';

describe('MicroApp1Component', () => {
  let component: MicroApp1Component;
  let fixture: ComponentFixture<MicroApp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroApp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
