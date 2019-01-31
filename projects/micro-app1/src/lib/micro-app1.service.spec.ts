import { TestBed } from '@angular/core/testing';

import { MicroApp1Service } from './micro-app1.service';

describe('MicroApp1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroApp1Service = TestBed.get(MicroApp1Service);
    expect(service).toBeTruthy();
  });
});
